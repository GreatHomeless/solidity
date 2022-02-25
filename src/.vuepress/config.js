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
        title: "목차",
        path: "/handbook/",
        collapsable: false,
      },
      {
        title: "이더리움",
        path: "/handbook/01이더리움",
        collapsable: false,
        children: [
          "/handbook/01이더리움/01",
          "/handbook/01이더리움/02",
          "/handbook/01이더리움/03",
        ],
      },
      {
        title: "솔리디티",
        path: "/handbook/02솔리디티",
        collapsable: false,
        children: [
          "/handbook/02솔리디티/01",
          "/handbook/02솔리디티/02",
          "/handbook/02솔리디티/03",
        ],
      },
      {
        title: "실전 프로젝트",
        path: "/handbook/03실전프로젝트",
        collapsable: false,
        children: [
          "/handbook/03실전프로젝트/01",
          "/handbook/03실전프로젝트/02",
        ],
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
