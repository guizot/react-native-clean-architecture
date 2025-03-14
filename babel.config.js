module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo", "module:metro-react-native-babel-preset"],
    plugins: [
      "babel-plugin-transform-typescript-metadata",
      [
        "module-resolver",
        {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
          root: ["."],
        },
      ],
      ["@babel/plugin-proposal-decorators", { "legacy": true }]
    ],
  };
};
