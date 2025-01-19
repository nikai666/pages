const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

app.use('/', createProxyMiddleware({
  target: 'http://portal.pku-hit.com',
  changeOrigin: true,
  onProxyRes: function(proxyRes, req, res) {
    proxyRes.headers['Access-Control-Allow-Origin'] = '*';
  }
}));

app.listen(3000); 