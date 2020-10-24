<script>
import * as maptalks from 'maptalks'
    export default {
        name: 'SGMap',
        props: [
            'id',
            'zooms',
            'controls',
            'zoom',//响应变化
            'center',//响应变化
            'extent',
            'projection',
            'zoombar',
            'scalebar',
            'copyright'
        ],
        events:[
            'mouseup','zoomend',
        ],
        destroyed(){
            this.$map.remove();
        },
        data(){
            return {
                
            }
        },
        watch: {
            center(n,o){
                this.$map.setCenter(n);
            },
            zoom(n,o){
                this.$map.setZoom(n);
            },
            extent(n,o){
                if(n)
                this.$map.fitExtent(new maptalks.Extent(n),-1);
            }
        },
        mounted() {
            this.$map =  new maptalks.Map(this.id, {
                center:this.center,
                zoom: this.zoom || 9,
                minZoom: (this.zooms&&this.zooms[0]) || 5,
                maxZoom: (this.zooms&&this.zooms[1]) || 19,
                view:{
                    projection: this.projection || 'baidu'
                },
                attributionControl: this.copyright || false, //版权信息控件
                zoomControl: this.zoombar || false, //设置缩放控件的位置
                scaleControl: this.scalebar || false, //比例尺控件
            });
            //分发事件
            for(let e of this.$options.events)
                this.$map.on(e,(event)=>{     this.$emit(e,event);    })
            //加入子组件(layer)
            for(let child of this.$children){
                if(child.id != undefined){
                    if(this.$map.getLayer(child.id)) continue;
                    if(child.isBase) this.$map.setBaseLayer(child.$layer)
                    else this.$map.addLayer(child.$layer)
                    child.added && child.added();
                }else{
                    child.added && child.added();
                }
            }
        }
    }
</script>

<template>
    <div :id="id" style="height:100%">
        <slot></slot>
    </div>
</template>
<style scoped>

</style>
