// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const purgecss = require('@fullhuman/postcss-purgecss');
const tailwind = require('tailwindcss');

const postcssPlugins = [tailwind()];

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss());

module.exports = {
  siteName: 'Ux Portfolio',
  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-129349017-2'
      }
    }
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  }
};
