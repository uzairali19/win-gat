module.exports = {
  plugins: [
      // Tell gatsby which theme you will be using.
      {
      resolve: "gatsby-wordpress-theme-phoenix",
      options: {
          wordPressUrl: 'xxxx',
          frontendUrl: 'https://example.com'
      }
  } ]
};