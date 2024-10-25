import { defineClientConfig } from "@vuepress/client";
import RandomLink from "./components/RandomLink.vue"; // 修改为你的组件实际路径

export default defineClientConfig({
  enhance({ app }) {
    // 将 RandomLink 注册为全局组件
    app.component("RandomLink", RandomLink);
  },
});
