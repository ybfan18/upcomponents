const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Upcomponent',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Users/fanyabo/Desktop/ybfan/myappExt/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Upcomponent',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/fanyabo/Desktop/ybfan/myappExt',
          templates:
            '/Users/fanyabo/Desktop/ybfan/myappExt/node_modules/docz-core/dist/templates',
          docz: '/Users/fanyabo/Desktop/ybfan/myappExt/.docz',
          cache: '/Users/fanyabo/Desktop/ybfan/myappExt/.docz/.cache',
          app: '/Users/fanyabo/Desktop/ybfan/myappExt/.docz/app',
          appPackageJson: '/Users/fanyabo/Desktop/ybfan/myappExt/package.json',
          appTsConfig: '/Users/fanyabo/Desktop/ybfan/myappExt/tsconfig.json',
          gatsbyConfig:
            '/Users/fanyabo/Desktop/ybfan/myappExt/gatsby-config.js',
          gatsbyBrowser:
            '/Users/fanyabo/Desktop/ybfan/myappExt/gatsby-browser.js',
          gatsbyNode: '/Users/fanyabo/Desktop/ybfan/myappExt/gatsby-node.js',
          gatsbySSR: '/Users/fanyabo/Desktop/ybfan/myappExt/gatsby-ssr.js',
          importsJs:
            '/Users/fanyabo/Desktop/ybfan/myappExt/.docz/app/imports.js',
          rootJs: '/Users/fanyabo/Desktop/ybfan/myappExt/.docz/app/root.jsx',
          indexJs: '/Users/fanyabo/Desktop/ybfan/myappExt/.docz/app/index.jsx',
          indexHtml:
            '/Users/fanyabo/Desktop/ybfan/myappExt/.docz/app/index.html',
          db: '/Users/fanyabo/Desktop/ybfan/myappExt/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
