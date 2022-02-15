const withPWA = require('next-pwa');

module.exports = {
  pwa: withPWA({
    dest: 'public',
    register: true,
    mode: 'production',
    disable: false,
  }),
  reactStrictMode: true,
  images: {
    domains: ['placeimg.com'],
  },
};
