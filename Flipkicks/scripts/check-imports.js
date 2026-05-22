const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'src');
const exts = ['.js', '.jsx', '.ts', '.tsx', '.css', '.json'];

function walk(dir){
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file=>{
    const p = path.join(dir,file);
    const stat = fs.statSync(p);
    if(stat && stat.isDirectory()){
      results = results.concat(walk(p));
    } else {
      results.push(p);
    }
  });
  return results;
}

function fileExistsWithExt(base){
  for(const e of exts){
    if(fs.existsSync(base+e)) return base+e;
  }
  if(fs.existsSync(base)) return base;
  return null;
}

function findCandidates(basename){
  const all = walk(SRC);
  return all.filter(f=> path.basename(f).toLowerCase() === basename.toLowerCase());
}

function analyzeFile(file){
  const text = fs.readFileSync(file,'utf8');
  const importRegex = /import\s+(?:[^'"\n]+from\s+)?['"]([^'"]+)['"]/g;
  const requireRegex = /require\(['"]([^'"]+)['"]\)/g;
  const problems = [];
  let m;
  while((m = importRegex.exec(text)) !== null){
    problems.push(m[1]);
  }
  while((m = requireRegex.exec(text)) !== null){
    problems.push(m[1]);
  }
  const broken = [];
  for(const imp of problems){
    if(imp.startsWith('.') || imp.startsWith('/')){
      const resolvedBase = path.resolve(path.dirname(file), imp);
      const found = fileExistsWithExt(resolvedBase);
      if(!found){
        const basename = path.basename(imp);
        const candidates = findCandidates(basename) ;
        broken.push({import: imp, file, candidates});
      }
    }
  }
  return broken;
}

function main(){
  const allFiles = walk(SRC).filter(f=>/\.jsx?$|\.tsx?$/.test(f));
  const report = [];
  for(const f of allFiles){
    const b = analyzeFile(f);
    if(b.length) report.push(...b);
  }
  if(report.length===0){
    console.log('No broken relative imports found.');
    process.exit(0);
  }
  console.log(JSON.stringify(report,null,2));
  process.exit(0);
}

main();
