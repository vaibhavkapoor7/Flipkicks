const { spawn } = require('node:child_process');
const path = require('node:path');
const scriptPath = path.join(__dirname, 'sneaks-api-worker.cjs');
const limit = process.argv[2] || '10';

const child = spawn(process.execPath, [scriptPath, limit], {
  stdio: ['ignore', 'pipe', 'pipe'],
});

child.stdout.pipe(process.stdout);
child.stderr.pipe(process.stderr);

child.on('close', (code) => {
  process.exit(code);
});
