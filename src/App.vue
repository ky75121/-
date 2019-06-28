<template>
  <div id="app">
    <!-- 3用标签的形式使用 -->
    <Nav/>
    <router-view/>
  </div>
</template>
<script>
//1引入组件
import Nav from './components/NaV'
export default {
  // 2注册
  components:{
    Nav
  }
} 
</script>

<style >


 a {
  text-decoration: none;
  color: #333;
}


</style>
