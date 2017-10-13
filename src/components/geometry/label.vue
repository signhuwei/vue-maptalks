<script>
    export default {
        name: 'SGLabel',
        props: [
            'id',
            'lonlat',
            'symbol',
            'hide',
            'content'
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
            },
            hide(n,o) {
                if(n === true) this.$geometry.hide();
                if(n === false) this.$geometry.show();
            }
        },
        mounted() {
            this.$geometry = new maptalks.Label(this.content,this.lonlat, {
                id: this.id,
                symbol: this.symbol
            });
            if(!this.$parent.$layer) return;
            this.$parent.$layer.addGeometry(this.$geometry);
        }
    }
</script>
<template>
</template>
