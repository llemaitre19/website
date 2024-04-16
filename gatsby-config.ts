import type { GatsbyConfig } from 'gatsby';

const path = require('path');
// Get paths of Gatsby's required rules, which as of writing is located at:
// https://github.com/gatsbyjs/gatsby/tree/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/
// gatsby/src/utils/eslint-rules
const gatsbyRequiredRules = path.join(
  process.cwd(),
  'node_modules',
  'gatsby',
  'dist',
  'utils',
  'eslint-rules',
);

const config: GatsbyConfig = {
  siteMetadata: {
    author: 'Loïc Lemaître',
    siteUrl: 'https://develem.fr',
    title: 'Develem'
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation
  // and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ['gatsby-plugin-vanilla-extract', 'gatsby-plugin-image', {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: 'src/images/favicon.png',
    },
  }, 'gatsby-plugin-sharp', 'gatsby-transformer-sharp', {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: './src/images/',
    },
    __key: 'images',
  }, {
    resolve: 'gatsby-plugin-eslint',
    options: {
      // Gatsby required rules directory
      rulePaths: [gatsbyRequiredRules],
      // Default settings that may be omitted or customized
      stages: ['develop'],
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      exclude: ['node_modules', 'bower_components', '.cache', 'public'],
      // Any additional eslint-webpack-plugin options below
      // ...
    },
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/src/locales`,
      name: 'locale',
    },
  }, {
    resolve: 'gatsby-plugin-react-i18next',
    options: {
      localeJsonSourceName: 'locale', // name given to `gatsby-source-filesystem` plugin.
      languages: ['fr', 'en'],
      defaultLanguage: 'fr',
      redirect: true, // Activate redirection based on browser language (only if no language cookie is already set)
      siteUrl: 'https://develem.fr',
      // if you are using trailingSlash gatsby config include it here, as well (the default is
      // 'always')
      trailingSlash: 'always',
      // you can pass any i18next options
      i18nextOptions: {
        interpolation: {
          escapeValue: false, // not needed for react as it escapes by default
        },
        ns: ['header', 'navigation'],
      },
    },
  }, {
    resolve: 'gatsby-plugin-sitemap',
    options: {
      excludes: ['**/404/', '**/404.html'],
    },
  }],
};

export default config;
