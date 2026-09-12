import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { markdownImagePlugin } from '@vuepress/plugin-markdown-image'
import { slimsearchPlugin } from '@vuepress/plugin-slimsearch'
import { commentPlugin } from '@vuepress/plugin-comment'
export default defineUserConfig({
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '山西大学开源软件协会',
      description: 'SXU Open Source Association',
    },
    '/en/': {
      lang: 'en-US',
      title: 'SXUOSA',
      description: 'SXU Open Source Association',
    },
  },
  theme: defaultTheme({
    logo: '/image/logo.svg',
    locales: {
      '/': {
        selectLanguageName: '简体中文',
        navbar: [
          { text: '前言', link: '/foreword.md' },
          { text: '开始', link: '/start.md' },
          { text: '自学指南', link: '/guide.md'},
          { text: 'Linux', link: '/linux.md'},
          { text: '超算', link: '/HPC.md'},
          { text: '算法', link: '/algorithm.md'},
          { text: '网络安全', link: '/network.md'},
          { text: 'AI', link: '/AI.md'},
          {
            text: "编程入门",
            children: [
              { 
                text : "Python",
                children: [
                  { text: '为了什么', link: '/代码入门/Python/1-为了什么.md' },
                  { text: '安装 Python 与 VSC', link: '/代码入门/Python/2-安装Python与VSC.md' },
                  { text: '基本数据类型', link: '/代码入门/Python/3-基本数据类型.md' },
                  { text: '运算符与赋值符', link: '/代码入门/Python/4-运算符与赋值符.md' },
                  { text: '条件控制语句', link: '/代码入门/Python/5-条件控制语句.md' },
                  { text: '序列数据类型', link: '/代码入门/Python/6-序列数据类型.md' },
                  { text: '循环语句和循环控制', link: '/代码入门/Python/7-循环语句和循环控制.md' },
                  { text: '人工智能辅助编码', link: '/代码入门/Python/8-人工智能代码补全.md' },
                  { text: '缩进与代码块', link: '/代码入门/Python/9-缩进与代码块.md' },
                  { text: '注释', link: '/代码入门/Python/10-注释.md' },
                  { text: '单行判断赋值', link: '/代码入门/Python/11-单行判断赋值.md' },
                  { text: '序列结构的其他用法', link: '/代码入门/Python/12-序列结构的其他用法.md' },
                  { text: '推导式赋值', link: '/代码入门/Python/13-推导式赋值.md' },
                  { text: '函数定义', link: '/代码入门/Python/14-函数定义.md' },
                  { text: '常用函数', link: '/代码入门/Python/15-常用函数.md' },
                  { text: '数据结构设计', link: '/代码入门/Python/16-数据结构设计.md' },
                  { text: '基本数据结构的其他用法', link: '/代码入门/Python/17-基本数据结构的其他用法.md' },
                  { text: '代码补全', link: '/代码入门/Python/18-代码补全.md' },
                  { text: '函数的其他用法及 λ 表达式', link: '/代码入门/Python/19-函数的其他用法及辣妈打表达式.md' },
                  { text: '文件读写', link: '/代码入门/Python/20-文件读写.md' },
                  { text: '导入模块', link: '/代码入门/Python/21-导入模块.md' },
                  { text: 'math 模块', link: '/代码入门/Python/22-math模块.md' },
                  { text: 'os 模块', link: '/代码入门/Python/23-os模块.md' },
                  { text: 'random 模块', link: '/代码入门/Python/24-random模块.md' },
                  { text: '第三方包管理和版本管理', link: '/代码入门/Python/25-pip包管理.md' },
                  { text: 'json 存储', link: '/代码入门/Python/26-json存储.md' },
                  { text: '上网查', link: '/代码入门/Python/27-上网查.md' },
                  { text: '类', link: '/代码入门/Python/28-类.md' }
                ]
              }
            ]
          },
          { 
            text: '百团', 
            children:[
              { text: '2024', link: '/baituan/zhaoxin.md'},
              { text: '2025', link: '/baituan/zhaoxin2.md'}
            ]
          },
          { 
            text: 'blog', 
            children:[
              { text: 'zhujiechong', link: '/blog/zhujiechong.md'},
              { text: 'thefirsts.md', link: '/blog/thefirsts.md'}
            ]
          },
          { text: '工具', link: '/tools.md'},
          { text: '关于', link: '/about.md'},
          { text: 'Github', link: 'https://github.com/kungfudaibi/kungfudaibi.github.io'},
        ],
      },
      '/en/': {
        selectLanguageName: 'English',
        navbar: [
          { text: 'Introduction', link: '/en/introduction.md' },
          { text: 'Getting Started', link: '/en/getting-started.md' },
          { text: 'Self-taught Guide', link: '/en/self-taught-guide.md'},
          { text: 'Linux', link: '/en/linux.md'},
          { text: 'HPC', link: '/en/HPC.md'},
          { text: 'Algorithm', link: '/en/algorithm.md'},
          { text: 'Network Security', link: '/en/network-security.md'},
          { text: 'AI', link: '/en/AI.md'},
          { text: 'Recruitment', link: '/en/recruitment.md'},
          { 
            text: 'Blogs', 
            children:[
              { text: 'zhujiechong', link: '/en/blog/zhujiechong.md'},
              { text: 'thefirsts', link: '/en/blog/thefirsts.md'}
            ]
          },
          { text: 'About', link: '/en/about.md'},
          { text: 'Github', link: 'https://github.com/kungfudaibi/kungfudaibi.github.io'},
        ],
      },
    },
  }),
  plugins: [
    markdownImagePlugin({
      // 启用 figure
      figure: true,
      // 启用图片懒加载
      lazyload: true,
      // 启用图片标记
      mark: true,
      // 启用图片大小
      size: true,

    }),
    slimsearchPlugin({
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



