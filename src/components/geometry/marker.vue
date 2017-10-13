<script>
    export default {
        name: 'SGMarker',
        props: [
            'id',   //唯一id 不响应变化
            'lonlat',//中心位置,响应变化
            'symbol',//符号,响应变化
            'hide', //隐藏 响应变化
            'fit'
        ],
        destroyed(){
            this.$geometry.remove();
        },
        watch: {
            lonlat(n,o) {
                this.$geometry.setCoordinates(n);
            },
            symbol(n,o) {
                this.$geometry.setSymbol(n);
                this.$geometry.bringToFront();
            },
            hide(n,o) {
                if(n === true) this.$geometry.hide();
                if(n === false) this.$geometry.show();
            }
        },
        mounted() {
            this.$geometry = new maptalks.Marker(this.lonlat, {
                id: this.id,
                symbol: this.symbol
            });
            if(!this.$parent.$layer) return;
            this.$parent.$layer.addGeometry(this.$geometry,this.fit);
            
        }
    }
</script>
<template>
</template>
