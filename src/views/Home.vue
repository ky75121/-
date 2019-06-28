<template>
  <div class="home">
    这是首页
    <Banner :sliders="slider"/>
  </div>
</template>

<script>
import Banner from "../components/Banner";
import {getBanner} from '../api/index.js'
export default {
  name: "home",
  created(){ //ajax  异步 越早发送越好 一般放在 created 
    getBanner().then(data=>{
      console.log(data)
    })
  },
  data() {
    return {
      slider: [1, 2, 3, 4]
    };
  },
  components: {
    Banner
  }
};
</script>
