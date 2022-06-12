const withMarkdoc = require("@markdoc/next.js");

module.exports = withMarkdoc()({
  reactStrictMode: true,
  pageExtensions: ["md", "mdx", "mdoc", "js", "jsx", "ts", "tsx"],
});
