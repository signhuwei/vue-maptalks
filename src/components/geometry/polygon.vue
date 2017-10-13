<script>
    export default {
        name: 'SGPolygon',
        props: [
            'id',
            'points',
            'symbol',
            'properties',
            'hide',
            'fit'
        ],
        destroyed(){
            this.$geometry.remove();
        },
        watch: {
            points(n,o){
                this.$geometry.setCoordinates(n);
            },
            symbol(n,o){
                this.$geometry.setSymbol(n);
            },
            hide(n,o){
                if(n === true) this.$geometry.hide();
                if(n === false) this.$geometry.show();
            }
        },
        mounted() {
            this.$geometry = new maptalks.Polygon(this.points, {
                id: this.id,
                symbol: this.symbol,
                properties: this.properties
            });
            if(!this.$parent.$layer) return;
            this.$parent.$layer.addGeometry(this.$geometry,this.fit);
        }
    }
</script>
<template>
</template>
