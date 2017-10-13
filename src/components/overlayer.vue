<script>
    export default {
        name: 'SGOverlayer',
        props: [
            'id',
            'hide', //隐藏图层 响应变化
        ],
        destroyed(){
            this.$layer.remove();
        },
        watch: {
            hide(n,o){
                if(n === true) this.$layer.hide();
                if(n === false) this.$layer.show();
            }
        },
        mounted() {
            this.$layer = new maptalks.VectorLayer(this.id, {'render':'Canvas'});
            if(!this.$parent.$map) return;
            this.$parent.$map.addLayer(this.$layer);
            this.added();
        },
        methods: {
            added(){
                for(let child of this.$children){
                    this.$layer.addGeometry(child.$geometry,child.fid);
                }
            }
        }
    }
</script>
<template>
    <div>
    <slot></slot>
    </div>
</template>
