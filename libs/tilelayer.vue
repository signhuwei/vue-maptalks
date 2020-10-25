<template>
  
</template>

<script>
import { TileLayer } from 'maptalks'
import { onMounted, onBeforeUnmount, ref, toRefs, watch, watchEffect, inject } from 'vue'
import { addLayer } from './commons/map'
export default {
    name: 'mtTilelayer',
    props: {
        id: String,
        base: Boolean,
        urlTemplate: String,
        subdomains: Array,
        tileSystem: Object,
        visible: { type: Boolean, default: true },
        mapContext: Object,
    },
    setup(props){
			const { id, urlTemplate, subdomains, tileSystem, base } = props
			const { visible } = toRefs(props)
			const mtMap = inject('mtMap')
			let layer  = ref(null)

			onMounted(()=>{
				layer.value = new TileLayer(id,{
						urlTemplate,
						subdomains,
						tileSystem,
						visible: visible.value
				})
				addLayer(mtMap, layer.value, base)
			})

			watch(visible, ()=>!visible.value ? layer.value.hide() : layer.value.show() )

			onBeforeUnmount(()=>{
				layer.value && layer.value.remove()
				layer.value = null
			})

			return { layer }
    }
}
</script>

<style>

</style>