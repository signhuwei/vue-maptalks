<template>
  <mt-map :id="id" :zoom="zoom" :center="center" style="height:600px;width:800px">
    <mt-tilelayer id="baidu" :urlTemplate="urlTemplate" :subdomains="subdomains"></mt-tilelayer>
  </mt-map>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return {
      id: 'map',
      zoom: 9,
      center: [120,30],
      urlTemplate: 'https://maponline%s.bdimg.com/tile/?qt=vtile&x=%s&y=%s&z=%s&styles=pl&udt=20201020&scaler=1&showtext=1',
      subdomains: [0,1,2,3]
    }
  }
}
</script>
