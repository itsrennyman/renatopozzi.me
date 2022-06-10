const withMarkdoc = require("@markdoc/next.js");

module.exports = withMarkdoc(/* options */)({
  reactStrictMode: true,
  pageExtensions: ["md", "mdx", "mdoc", "js", "jsx", "ts", "tsx"],
});
