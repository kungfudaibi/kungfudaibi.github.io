# SXU开源软件协会

## 如何使用
需要 Node.js 24.x。项目使用 VuePress 2，核心、主题和插件的 RC 版本需要配套更新。

1.克隆本项目
```shell
git clone https://github.com/kungfudaibi/kungfudaibi.github.io
```
2.
```shell
cd kungfudaibi.github.io
npm ci
npm run docs:dev
```
3.
如果你只想修改文档内容，直接修改docs下的md文件即可

## 构建与部署

运行 `npm run docs:build`，静态文件输出到 `docs/.vuepress/dist`。
GitHub Actions 使用 Node.js 24 和 `npm ci` 构建，再发布到 `gh-pages`。
Vercel 应使用 Node.js 24.x，构建命令为 `npm run docs:build`，输出目录为 `docs/.vuepress/dist`。

全文搜索使用 `@vuepress/plugin-slimsearch`；Giscus 评论使用 `@vuepress/plugin-comment`。
提示容器由默认主题提供，图片增强使用 `@vuepress/plugin-markdown-image`。
