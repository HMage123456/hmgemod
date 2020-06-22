const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./index.html", "./src/**/*.vue"],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  whitelistPatterns: [
    /-(leave|enter|appear)(|-(to|from|active))$/,
    /^(?!cursor-move).+-move$/,
    /^router-link(|-exact)-active$/
  ]
});

module.exports = {
  plugins: [
    autoprefixer,
    tailwindcss,
    ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
  ]
};
