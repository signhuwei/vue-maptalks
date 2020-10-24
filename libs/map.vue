<template>
  <div :id="id">
		<slot></slot>
	</div>
</template>

<script>
import { Map as mtMap } from 'maptalks'
import { toRefs, watch, onMounted } from 'vue'
export default {
    name: 'mtMap',
    props: {
			id: String,
			center: Array,
			zoom: { type: Number, default: 3 },
			projection: { type: String, default: 'baidu' }
    },
    setup(props){
			const { id,projection } = props
			const { center, zoom } = toRefs(props)
			let map = null
			onMounted(()=>{
				map = new mtMap(id,{
					center: center.value,
					zoom: zoom.value,
					view: {
						projection
					}
				})
			})
			watch(zoom,()=>map.setZoom(zoom.value))
			watch(center,()=>map.setCenter(center.value))
    }
}
</script>

<style>

</style>