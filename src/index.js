import SGMap from './components/map';
import SGOverlayer from './components/overlayer';
import SGtilelayer from './components/tilelayer';
import SGToolbar from './components/toolbar';


const components = [
  SGMap,SGOverlayer,SGtilelayer,SGToolbar
];

const install = function(Vue, opts = {}) {
  
  if (install.installed) return;
  
  components.map(component => {
    Vue.component(component.name, component);
  });

};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};
