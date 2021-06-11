// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---readme-md": () => import("./../../../../README.md" /* webpackChunkName: "component---readme-md" */),
  "component---src-components-alert-alert-mdx": () => import("./../../../../src/components/Alert/Alert.mdx" /* webpackChunkName: "component---src-components-alert-alert-mdx" */),
  "component---src-components-up-button-up-button-mdx": () => import("./../../../../src/components/UpButton/UpButton.mdx" /* webpackChunkName: "component---src-components-up-button-up-button-mdx" */),
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

