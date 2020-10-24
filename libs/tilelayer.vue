<template>
  
</template>

<script>
import { TileLayer } from 'maptalks'
import { provide,inject, onMounted } from 'vue'
export default {
    name: 'mtTilelayer',
    props: {
        id: String,
        urlTemplate: String,
        subDomains: Array,
        tileSystem: Object,
        invisible: { type: Boolean, default: false }
    },
    setup(props){
        const { id, urlTemplate, subDomains, tileSystem } = props
        const layer = new TileLayer(id,{
            urlTemplate,
            subDomains,
            tileSystem,
        })
        provide('layer',layer)
        onMounted(()=>{
            const mapContext = inject('mapContext')
            mapContext.setBaseLayer(layer)
        })
    }
}
</script>

<style>

</style>