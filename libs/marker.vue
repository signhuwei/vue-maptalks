
<template>
  
</template>

<script>
import { Marker } from 'maptalks'
import { onMounted, ref, toRefs, inject } from 'vue'
import { addTo } from './commons/map'
export default {
  name: 'mtMarker',
  props: {
    id: String,
    lonlat: Array,
    visible: Boolean,
    symbol: Object
  },
  setup(props) {
    const { id, lonlat, symbol } = props
    const { visible } = toRefs(props)
    const layer = inject('mtVectorlayer')
    let marker = ref(null)
    onMounted(()=>{
      marker.value = new Marker(lonlat, {
        id,
        symbol
      })
      addTo(layer,marker.value)
    })
    
    watch(visible, ()=>!visible.value ? marker.value.hide() : marker.value.show() )
    return {
      marker
    }
  }
}
</script>

<style>

</style>