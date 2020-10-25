<template>
  <slot/>
</template>

<script>
import { VectorLayer } from 'maptalks'
import { onMounted, watch, provide, inject, ref, toRefs } from 'vue'
import { addLayer } from './commons/map'
export default {
  name: 'mtVectorlayer',
  props: {
    id: String,
    visible: { type: Boolean, default: true },
  },
  setup(props){
    const { id } = props
    const { visible } = toRefs(props)
    let layer = ref(null)
    const mtMap = inject('mtMap')

    onMounted(()=>{
      let vlry = new VectorLayer(id, {
        render:'Canvas',
        visible: visible.value
      })
      addLayer(mtMap, vlry)
      layer.value = vlry
    })

    watch(visible, ()=>!visible.value ? layer.value.hide() : layer.value.show() )

    provide('mtVectorlayer',layer)
    return {
      layer
    }
  }
}
</script>

<style>

</style>