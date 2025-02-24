// eslint-disable-next-line import/no-extraneous-dependencies
const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '@apis': path.resolve(__dirname, 'src/apis'),
    '@assets': path.resolve(__dirname, 'src/assets'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@constants': path.resolve(__dirname, 'src/constants'),
    '@contexts': path.resolve(__dirname, 'src/contexts'),
    '@hooks': path.resolve(__dirname, 'src/hooks'),
    '@pages': path.resolve(__dirname, 'src/pages'),
    '@styles': path.resolve(__dirname, 'src/styles'),
    '@utils': path.resolve(__dirname, 'src/utils'),
  })
);
