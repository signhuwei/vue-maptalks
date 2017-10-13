<script>
import * as maptalks from 'maptalks'
    export default {
        name: 'SGTilelayer',
        props: [
            'id',
            'tileSystem',
            'urlTemplate',
            'subDomains',
            'base',
            'hide'
        ],
        destroyed(){
            this.$layer.remove();
        },
        watch:{
            hide(n,o){
                if(n === true) this.$layer.hide();
                if(n === false) this.$layer.show();
            }
        },
        mounted() {
            this.$layer = new maptalks.TileLayer(this.id, {
                        tileSystem: this.tileSystem,
                        urlTemplate: this.urlTemplate,
                        subdomains: this.subDomains
                        });
            if(!this.$parent.$map) return;
            if(this.base)
                this.$parent.$map.setBaseLayer(this.$layer);
            else
                this.$parent.$map.addLayer(this.$layer);
        }
    }
</script>
<template>
    <div>
    </div>
</template>
