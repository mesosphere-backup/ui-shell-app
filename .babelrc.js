module.exports = {
  presets: ["@babel/react", "@babel/env"],
  plugins: [
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }]
  ],
  env: {
    production: {
      plugins: [["emotion", { hoist: true }]]
    },
    development: {
      plugins: [["emotion", { sourceMap: true, autoLabel: true }]]
    }
  }
};
