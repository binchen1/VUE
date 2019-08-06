<template>
  <div class="home">
    <div class="home-nav">
        <router-link to="/">
            <a-button type="primary">列表</a-button>
        </router-link>
        <router-link to="/form">
            <a-button type="primary">表单</a-button>
        </router-link>
    </div>
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
