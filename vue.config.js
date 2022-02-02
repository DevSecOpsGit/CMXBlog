

// vue.config.js file to be placed in the root of your repository




module.exports = {
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");

    svgRule.uses.clear();

    svgRule
      .use("babel-loader")
      .loader("babel-loader")
      .end()
      .use("vue-svg-loader")
      .loader("vue-svg-loader");
  },
};

// https://DevSecOpsGit1.gitlab.io/cmxblog.io


