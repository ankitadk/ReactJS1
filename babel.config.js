module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    [
      "@babel/preset-react",
      { runtime: "automatic" },
    ] /*This (@babel/preset-react) helps convert JSX into normal HTML*/,
  ],
};
