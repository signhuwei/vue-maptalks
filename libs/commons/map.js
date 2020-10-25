import { watch } from 'vue'
export function addTo(ctx,obj) {
  watch(ctx,()=>{
    obj.remove()
    obj.addTo(ctx.value)
  })
}
export function addLayer(map,lyr,base){
  watch(map,()=>{
    lyr.remove()
    base ? map.value.setBaseLayer(lyr) : lyr.addTo(map.value)
  })
}