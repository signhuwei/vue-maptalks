<template>
  <mtMap :id="id" :zoom="zoom" :center="center" style="height:600px;width:800px">

      <mtTilelayer id="baidu" :urlTemplate="urlTemplate" :subdomains="subdomains" ></mtTilelayer>
      <mtVectorlayer id="test" >
        <mtMarker id="m1" :lonlat="center"/>
      </mtVectorlayer>

  </mtMap>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data(){
    return {
      id: 'map',
      zoom: 9,
      center: [120,30],
      urlTemplate: 'https://maponline{s}.bdimg.com/tile/?qt=vtile&x={x}&y={y}&z={z}&styles=pl&udt=20201020&scaler=1&showtext=1',
      subdomains: [0,1,2,3]
    }
  }
}
</script>
