// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path');
const autoprefixer = require('autoprefixer'); // ADDED THIS LINE

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [path.resolve(__dirname, './src/assets/globals.scss')]
    });
}

const postcssPlugins = [autoprefixer()];

module.exports = {
  siteName: 'dr. Kakuk Zoltán Dániel',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss'
      /* These are the default options. You don't need to set any options to get going.
      options: {
        tailwindConfig: './some/file/js',
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true
      }
      */
    },
    {
      use: '@gridsome/source-airtable',
      options: {
        apiKey: process.env.AIRTABLE_API_KEY, // required
        base: process.env.AIRTABLE_BASE_ID, // required
        tables: [
          {
            name: process.env.AIRTABLE_TABLE_NAME, // required
            typeName: process.env.AIRTABLE_TYPE_NAME, // required
            select: {
              sort: [{ field: 'id', direction: 'asc' }]
            } // optional,
          },
          {
            name: 'ittasvezetes roller', // required
            typeName: 'roller', // required
            select: {
              sort: [{ field: 'id', direction: 'asc' }]
            } // optional,
          }
        ],
        tableName: 'YOUR_TABLE_NAME' // required
      }
    }
  ],
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule.use('vue-svg-loader').loader('vue-svg-loader');

    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach((type) => {
      addStyleResource(config.module.rule('scss').oneOf(type));
    });

    config.module
      .rule('scss') // or sass, scss, less, postcss, stylus
      .oneOf('normal') // or module
      .use('postcss-loader')
      .tap((options) => {
        options.plugins.push(autoprefixer());
        return options;
      });
  }
};
