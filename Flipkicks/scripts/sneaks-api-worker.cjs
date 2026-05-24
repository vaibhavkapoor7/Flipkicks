const SneaksAPI = require('sneaks-api');
const path = require('node:path');
const limit = Number(process.argv[2]) || 10;

const sneaks = new SneaksAPI();

function fetchShoes(limit) {
  return new Promise((resolve, reject) => {
    try {
      sneaks.getMostPopular(limit, (err, products) => {
        if (err) {
          return reject(err);
        }
        if (!Array.isArray(products)) {
          return reject(new Error('Sneaks API returned invalid products'));
        }
        resolve(products);
      });
    } catch (error) {
      reject(error);
    }
  });
}

fetchShoes(limit)
  .then((products) => {
    process.stdout.write(JSON.stringify(products));
    process.exit(0);
  })
  .catch((error) => {
    process.stderr.write(`ERROR: ${error.message}\n`);
    process.exit(1);
  });
