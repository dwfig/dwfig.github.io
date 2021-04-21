import{onMount as e,Knob as t,Patch as n}from"/js/core.js";import{F as s,L as _}from"./Light-8615628d.js";function o(e){let s,o,a,i,c,r,l,v,u,m,f,d,p,$,h,g,y,b,w,x,k,q,T,C,j,z,O;function S(t){e[5].call(null,t)}function A(t){e[6].call(null,t)}let D={x:96,y:56,label:"web",set:"fetched"};function F(t){e[7].call(null,t)}void 0!==e[0].hue&&(D.hue=e[0].hue),void 0!==e[0].fetched&&(D.value=e[0].fetched),s=new _({props:D}),__sv.binding_callbacks.push((()=>__sv.bind(s,"hue",S))),__sv.binding_callbacks.push((()=>__sv.bind(s,"value",A)));let P={label:"rate",x:10,y:60,min:22e-6,max:1,precision:6};function L(t){e[8].call(null,t)}void 0!==e[0].rate&&(P.value=e[0].rate),c=new t({props:P}),__sv.binding_callbacks.push((()=>__sv.bind(c,"value",F)));let M={size:"s",label:"milli",x:76,y:100,min:0,max:100,precision:2};function B(t){e[9].call(null,t)}void 0!==e[0].milli&&(M.value=e[0].milli),v=new t({props:M}),__sv.binding_callbacks.push((()=>__sv.bind(v,"value",L)));let E={size:"s",label:"micro",x:76,y:170,min:0,max:100,precision:2};function G(t){e[10].call(null,t)}void 0!==e[0].micro&&(E.value=e[0].micro),f=new t({props:E}),__sv.binding_callbacks.push((()=>__sv.bind(f,"value",B)));let I={size:"s",label:"start",x:18,y:218,min:0,max:1,precision:2};function R(t){e[11].call(null,t)}void 0!==e[0].fm&&(I.value=e[0].fm),$=new t({props:I}),__sv.binding_callbacks.push((()=>__sv.bind($,"value",G)));let Z={size:"s",label:"length",x:18,y:300,min:1,max:100,precision:2};return void 0!==e[0].trimix&&(Z.value=e[0].trimix),y=new t({props:Z}),__sv.binding_callbacks.push((()=>__sv.bind(y,"value",R))),q=new n({props:{label:"fm",x:24,y:155,name:"signal-in",input:e[1],onConnect:e[4]}}),C=new n({props:{label:"out",x:92,y:320,name:"audio-out",output:e[2]}}),{c(){__sv.create_component(s.$$.fragment),i=__sv.space(),__sv.create_component(c.$$.fragment),l=__sv.space(),__sv.create_component(v.$$.fragment),m=__sv.space(),__sv.create_component(f.$$.fragment),p=__sv.space(),__sv.create_component($.$$.fragment),g=__sv.space(),__sv.create_component(y.$$.fragment),w=__sv.space(),x=__sv.element("button"),x.textContent="dbg",k=__sv.space(),__sv.create_component(q.$$.fragment),T=__sv.space(),__sv.create_component(C.$$.fragment),__sv.set_style(x,"color","#111"),__sv.set_style(x,"background-color","#0fa"),__sv.set_style(x,"border-radius","20px")},m(t,n){__sv.mount_component(s,t,n),__sv.insert(t,i,n),__sv.mount_component(c,t,n),__sv.insert(t,l,n),__sv.mount_component(v,t,n),__sv.insert(t,m,n),__sv.mount_component(f,t,n),__sv.insert(t,p,n),__sv.mount_component($,t,n),__sv.insert(t,g,n),__sv.mount_component(y,t,n),__sv.insert(t,w,n),__sv.insert(t,x,n),__sv.insert(t,k,n),__sv.mount_component(q,t,n),__sv.insert(t,T,n),__sv.mount_component(C,t,n),j=!0,z||(O=__sv.listen(x,"click",e[3]),z=!0)},p(e,t){const n={};!o&&1&t&&(o=!0,n.hue=e[0].hue,__sv.add_flush_callback((()=>o=!1))),!a&&1&t&&(a=!0,n.value=e[0].fetched,__sv.add_flush_callback((()=>a=!1))),s.$set(n);const _={};!r&&1&t&&(r=!0,_.value=e[0].rate,__sv.add_flush_callback((()=>r=!1))),c.$set(_);const i={};!u&&1&t&&(u=!0,i.value=e[0].milli,__sv.add_flush_callback((()=>u=!1))),v.$set(i);const l={};!d&&1&t&&(d=!0,l.value=e[0].micro,__sv.add_flush_callback((()=>d=!1))),f.$set(l);const m={};!h&&1&t&&(h=!0,m.value=e[0].fm,__sv.add_flush_callback((()=>h=!1))),$.$set(m);const p={};!b&&1&t&&(b=!0,p.value=e[0].trimix,__sv.add_flush_callback((()=>b=!1))),y.$set(p);const g={};2&t&&(g.input=e[1]),q.$set(g);const w={};4&t&&(w.output=e[2]),C.$set(w)},i(e){j||(__sv.transition_in(s.$$.fragment,e),__sv.transition_in(c.$$.fragment,e),__sv.transition_in(v.$$.fragment,e),__sv.transition_in(f.$$.fragment,e),__sv.transition_in($.$$.fragment,e),__sv.transition_in(y.$$.fragment,e),__sv.transition_in(q.$$.fragment,e),__sv.transition_in(C.$$.fragment,e),j=!0)},o(e){__sv.transition_out(s.$$.fragment,e),__sv.transition_out(c.$$.fragment,e),__sv.transition_out(v.$$.fragment,e),__sv.transition_out(f.$$.fragment,e),__sv.transition_out($.$$.fragment,e),__sv.transition_out(y.$$.fragment,e),__sv.transition_out(q.$$.fragment,e),__sv.transition_out(C.$$.fragment,e),j=!1},d(e){__sv.destroy_component(s,e),e&&__sv.detach(i),__sv.destroy_component(c,e),e&&__sv.detach(l),__sv.destroy_component(v,e),e&&__sv.detach(m),__sv.destroy_component(f,e),e&&__sv.detach(p),__sv.destroy_component($,e),e&&__sv.detach(g),__sv.destroy_component(y,e),e&&__sv.detach(w),e&&__sv.detach(x),e&&__sv.detach(k),__sv.destroy_component(q,e),e&&__sv.detach(T),__sv.destroy_component(C,e),z=!1,O()}}}function a(e){let t,n;return t=new s({props:{title:"Zhap",color:"#563696",image:"../assets/itea-bg-1.svg",$$slots:{default:[o]},$$scope:{ctx:e}}}),{c(){__sv.create_component(t.$$.fragment)},m(e,s){__sv.mount_component(t,e,s),n=!0},p(e,[n]){const s={};131079&n&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){n||(__sv.transition_in(t.$$.fragment,e),n=!0)},o(e){__sv.transition_out(t.$$.fragment,e),n=!1},d(e){__sv.destroy_component(t,e)}}}function i(t,n,s){var _=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(_,o){function a(e){try{c(s.next(e))}catch(e){o(e)}}function i(e){try{c(s.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?_(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((s=s.apply(e,t||[])).next())}))};console.log("../../src/itea_bg.svg");let{state:o={freq:440,type:"sine",fm:1,trimix:.5,fetched:!1,data:null,hue:"#ffc75e",rate:1,milli:0,micro:0}}=n;const a=new Tone.CrossFade,i=new Tone.Oscillator(o.freq,o.type).connect(a.a).start(),c=new Tone.Oscillator(o.freq,"sawtooth").connect(a.b).start(),r=new Tone.Scale(0,1);let l,v=new Tone.Player;e((()=>_(void 0,void 0,void 0,(function*(){try{let _="http://www.ioc-sealevelmonitoring.org/service.php?query=data&format=json&code=zhap&includesensors[]=rad&timestop=now&timestart=",a=new Date,i=6e4,c=new Date(a-745*i).toISOString().slice(0,16);const r=yield fetch(_+c,{method:"GET",headers:{"Content-Type":"application/json"}}),u=yield r.json();s(0,o.data=u,o),s(0,o.fetched=!0,o),console.log(_+c),console.log(o.data),s(0,o.hue="#42a4ff",o),l=(new Tone.ToneAudioBuffer).fromArray(new Float32Array(o.data.length));for(var e=0;e<l.numberOfChannels;e++)for(var t=l.getChannelData(e),n=0;n<l.length;n++)t[n]=o.data[n].slevel;s(2,v=new Tone.Player(l)),v.loaded?v.start():s(2,v.autostart=!0,v),s(2,v.loop=!0,v)}catch(e){console.log(e),s(0,o.hue="#eb3495",o)}}))));return t.$$set=e=>{"state"in e&&s(0,o=e.state)},t.$$.update=()=>{1&t.$$.dirty&&s(2,v.playbackRate=o.rate+o.milli/1e3+o.micro/1e6,v),1&t.$$.dirty&&(c.frequency.value=o.freq),1&t.$$.dirty&&(i.type=o.type),1&t.$$.dirty&&(a.fade.value=o.trimix),1&t.$$.dirty&&s(1,r.min=Math.max(0,o.rate-o.rate*o.fm),r),1&t.$$.dirty&&s(1,r.max=Math.min(1,o.rate+(1-o.rate)*o.fm),r)},[o,r,v,e=>{let t=o.milli/1e3,n=o.micro/1e6;console.log(o.rate+t+n)},e=>{e?(r.connect(i.frequency),r.connect(c.frequency)):(r.disconnect(i.frequency),i.frequency.overridden=!1,i.frequency.value=o.freq,r.disconnect(c.frequency),c.frequency.overridden=!1,c.frequency.value=o.freq)},function(e){o.hue=e,s(0,o)},function(e){o.fetched=e,s(0,o)},function(e){o.rate=e,s(0,o)},function(e){o.milli=e,s(0,o)},function(e){o.micro=e,s(0,o)},function(e){o.fm=e,s(0,o)},function(e){o.trimix=e,s(0,o)}]}class c extends __sv.SvelteComponent{constructor(e){super(),__sv.init(this,e,i,a,__sv.safe_not_equal,{state:0})}}export default c;