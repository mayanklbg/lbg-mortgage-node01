const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    'api/',
    createProxyMiddleware({
      target: 'http://cicd-backend-backend-app.backend.svc.cluster.local:8080/',
      changeOrigin: true,
    })
  );
};
