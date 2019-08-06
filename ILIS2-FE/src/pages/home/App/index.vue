<template>
  <div class="home">
    <router-link to="/comment/1">comment页面</router-link>
    <img src="@assets/home/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
    @import "./index.less";
</style>
