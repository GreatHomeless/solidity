module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  title: "솔리디티 핸드북",
  description: "솔리디티를 쉽고 빠르게 배우는 방법",
  head: [["meta", { name: "theme-color", content: "#656565" }]],

  base: "/solidity/",
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    sidebar: [
      {
        title: "handbook",
        path: "/handbook/",
        collapsable: false,
        children: ["/handbook/테스트/개요"],
      },
    ],
    // repo: "vuejs/vuepress",
    editLinks: true,
    docsDir: "packages/docs/docs",
    nav: [
      {
        text: "📓 HandBook",
        link: "/handbook/",
      },
      // {
      //   text: "VuePress",
      //   link: "https://v1.vuepress.vuejs.org",
      // },
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
