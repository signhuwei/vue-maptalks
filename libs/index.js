// import SGMap from './components/map';
// import SGOverlayer from './components/overlayer';
// import SGtilelayer from './components/tilelayer';
// import SGToolbar from './components/toolbar';

import  mtMap from './map.vue'
import  mtTilelayer from './tilelayer.vue'
import  mtVectorlayer from './vectorlayer.vue'
import  mtMarker from './marker.vue'
import 'maptalks/dist/maptalks.css'
export default {
  install: (app,opts = {}) => {
    [
      mtMap,
      mtTilelayer,
      mtVectorlayer,
      mtMarker
    ].forEach(c => {
      app.component(c.name, c)
    })
  }
}
