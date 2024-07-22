import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance"
import { searchProPlugin } from "vuepress-plugin-search-pro"
import { commentPlugin } from '@vuepress/plugin-comment'
export default defineUserConfig({
  lang: 'zh-CN',
  title: '山西大学开源软件协会',
  description: 'SXU Open Source Association',
  theme: defaultTheme({
    logo: '/image/logo.png',
    // 修改导航栏配置
    navbar: [
      { text: 'Home', link: '/' },
      { text: '前言', link: '/foreword.md' },
      { text: '开始', link: '/start.md' },
      { text: '自学指南', link: '/guide.md'},
      { text: 'Linux之旅', link: '/linux.md'},
      { text: '超算', link: '/HPC.md'},
      { text: '算法', link: '/algorithm.md'},
      { text: '网络安全', link: '/network.md'},
      { text: '人工智能', link: '/AI.md'},
      { text: '关于', link: '/about.md'},
      { text: 'GitHub', link: 'https://github.com/kungfudaibi/kungfudaibi.github.io'},
    ],

  }),
  plugins: [
    mdEnhancePlugin({
      // 启用提示容器
      hint: true,
      // 启用 figure
      figure: true,
      // 启用图片懒加载
      imgLazyload: true,
      // 启用图片标记
      imgMark: true,
      // 启用图片大小
      imgSize: true,
    }),
    searchProPlugin({
      indexContent:true,
    }),
    commentPlugin({
      provider: "Giscus",
      repo: "kungfudaibi/kungfudaibi.github.io",
      repoId: "R_kgDOKpEcCQ",
      category: "Announcements",
      categoryId: "DIC_kwDOKpEcCc4ChEoG",
    }),
  ],
  bundler: viteBundler(),
})



