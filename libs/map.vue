<template>
  <div :id="id">
		<slot></slot>
	</div>
</template>

<script>
import { Map as mtMap } from 'maptalks'
import { toRefs, watch, onMounted, ref, provide } from 'vue'
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
			let map = ref(null)

			provide('mtMap',map)
			watch(zoom,()=>map.value.setZoom(zoom.value))
			watch(center,()=>map.value.setCenter(center.value))

			onMounted(() => {
				map.value = new mtMap(id,{
					center: center.value,
					zoom: zoom.value,
					view: {
						projection
					},
					attributionControl: false, //版权信息控件
					zoomControl: true, //设置缩放控件的位置
					scaleControl: true, //比例尺控件
				})
			})
			return {}
    }
}
</script>

<style>

</style>