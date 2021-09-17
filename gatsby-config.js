const path = require('path');

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'sobre-shop-cart',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        components: path.join(__dirname, 'src/components'),
        layouts: path.join(__dirname, 'src/layouts'),
        images: path.join(__dirname, 'src/images'),
        scss: path.join(__dirname, 'src/scss'),
        types: path.join(__dirname, 'src/types'),
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        utils: path.join(__dirname, 'src/utils'),
      },
    },
  ],
};
