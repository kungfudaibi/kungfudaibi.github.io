<template>
  <div>
    <p>生成的链接是：</p>
    <a :href="url" target="_blank">{{ url }}</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: '',
    };
  },
  mounted() {
    // 生成 0 到 1000 的随机数
    const a = Math.floor(Math.random() * 1001);
    // 拼接 URL，将随机数作为 token 参数添加
    this.url = `http://8.141.119.119:8000?token=${a}:OK`;
  },
};
</script>

<style scoped>
p {
  font-size: 18px;
}
a {
  font-weight: bold;
  color: #42b983;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
