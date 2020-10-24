// import SGMap from './components/map';
// import SGOverlayer from './components/overlayer';
// import SGtilelayer from './components/tilelayer';
// import SGToolbar from './components/toolbar';

import  mtMap from './map.vue'
import  mtTilelayer from './tilelayer.vue'

export default {
  install: (app,opts = {}) => {
    [mtMap, mtTilelayer].forEach(c => {
      app.component(c.name, c)
    })
  }
}
