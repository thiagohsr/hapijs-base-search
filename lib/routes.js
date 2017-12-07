var api = require('./api');

module.exports = [
  {
    method: 'GET',
    path: '/api/refurbisheds',
    handler: api.refurbisheds.all
  },
  {
    method: 'GET',
    path: '/api/refurbisheds/{product}/product/',
    handler: api.refurbisheds.product_id
  },
  {
    method: 'GET',
    path: '/api/refurbisheds/{description}/description/',
    handler: api.refurbisheds.by_description
  }
];