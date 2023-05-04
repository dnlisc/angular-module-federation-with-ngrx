const {
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "mfe1",
  filename: "mfe1.js",
  exposes: { "./Module": "./projects/mfe1/src/app/entry/entry.module.ts" },
});
