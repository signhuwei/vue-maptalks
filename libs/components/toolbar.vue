<script>
    export default {
        name: 'SGToolbar',
        props: [
            'position',
            'height',
            'vertical',
            'items'
        ],
        destroyed(){
            this.$toolbar && this.$toolbar.remove();
        },
        mounted() {
            if(!this.$parent.$map) return;
            this.added();
        },
        methods: {
            added() {
                this.items || (this.items = []);
                for(let child of this.$children){
                    this.items.push({
                        item: child.name,
                        click: child.click
                    })
                }
                this.$toolbar = new maptalks.control.Toolbar({
                    position: this.position || 'bottom-right',
                    height: this.height || 28,
                    vertical: this.vertical,
                    items: this.items
                });
                this.$parent.$map.addControl(this.$toolbar);
            }
        }
    }
</script>
<template>
</template>
