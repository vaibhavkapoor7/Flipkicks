#!/usr/bin/env node
const express = require('express');
const SneaksAPI = require('sneaks-api');

const sneaks = new SneaksAPI();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

// Allow local dev origin (Vite) to access this server
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

function safeCall(fn, res) {
  try {
    fn();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || 'Internal error' });
  }
}

app.get('/api/shoes/popular', (req, res) => {
  const limit = parseInt(req.query.limit || '10', 10);
  safeCall(() => {
    sneaks.getMostPopular(limit, (err, products) => {
      if (err) {
        console.error('sneaks.getMostPopular error:', err);
        return res.status(500).json({ error: err.message || 'Sneaks error' });
      }
      res.json(products || []);
    });
  }, res);
});

app.get('/api/shoes/search', (req, res) => {
  const q = req.query.q;
  const limit = parseInt(req.query.limit || '10', 10);
  if (!q) return res.status(400).json({ error: 'Missing query parameter q' });
  safeCall(() => {
    sneaks.getProducts(q, limit, (err, products) => {
      if (err) {
        console.error('sneaks.getProducts error:', err);
        return res.status(500).json({ error: err.message || 'Sneaks error' });
      }
      res.json(products || []);
    });
  }, res);
});

app.get('/api/shoes/prices/:style', (req, res) => {
  const style = req.params.style;
  if (!style) return res.status(400).json({ error: 'Missing style param' });
  safeCall(() => {
    sneaks.getProductPrices(style, (err, product) => {
      if (err) {
        console.error('sneaks.getProductPrices error:', err);
        return res.status(500).json({ error: err.message || 'Sneaks error' });
      }
      res.json(product || {});
    });
  }, res);
});

app.listen(PORT, () => {
  console.log(`Sneaks proxy server listening on http://localhost:${PORT}`);
});
