import{R as p,c}from"./index-DrSQQv9w.js";class h{constructor(){this.supportCascades=!1}loadCubeData(){throw".env not supported in Cube."}loadData(o,e,l){const r=new Uint8Array(o.buffer,o.byteOffset,o.byteLength),t=p(r),n=c(r,t),i=t.width*t.height,s=new Float32Array(i*4);for(let a=0;a<i;a+=1)s[a*4]=n[a*3],s[a*4+1]=n[a*3+1],s[a*4+2]=n[a*3+2],s[a*4+3]=1;l(t.width,t.height,e.generateMipMaps,!1,()=>{const a=e.getEngine();e.type=1,e.format=5,e._gammaSpace=!1,a._uploadDataToTextureDirectly(e,s)})}}export{h as _HDRTextureLoader};
