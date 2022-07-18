// craco.config.js
module.exports = {
  style: {
    postcssOptions: {
      // eslint-disable-next-line import/no-extraneous-dependencies, global-require
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};
