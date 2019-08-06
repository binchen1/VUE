<template>
  <div class="comment">
    <span>{{ msg }}</span>
    <ul>
        <li v-for="item in listData" :key="item.name">
            {{ item.name }} -- {{ item.age }}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'comment',
  data () {
    return {
      msg: 'comment路由',
      listData:[{
          name: "a",
          age: 10
      },{
          name: "b",
          age: 12
      },{
          name: "c",
          age: 15
      }]
    }
  }
}
</script>

<style scoped>
    .comment{
        color: blue;
        font-size: 24px;
    }
</style>
