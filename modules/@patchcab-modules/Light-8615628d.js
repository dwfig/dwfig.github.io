function t(t,e,s){const _=t.slice();return _[6]=e[s],_}function e(t){let e,s;return{c(){e=__sv.element("h1"),s=__sv.text(t[0]),__sv.attr(e,"class","svelte-1ugmpjz")},m(t,_){__sv.insert(t,e,_),__sv.append(e,s)},p(t,e){1&e&&__sv.set_data(s,t[0])},d(t){t&&__sv.detach(e)}}}function s(t){let e,s;return{c(){e=__sv.svg_element("svg"),s=__sv.svg_element("path"),__sv.attr(s,"d","M6 12A6 6 0 106 0a6 6 0 000 12zm5-6A5 5 0 111 6a5 5 0 0110 0zM4 4.667L4.667 4 6 5.333 7.333 4 8 4.667 6.667 6\n\t\t\t\t8 7.333 7.333 8 6 6.667 4.667 8 4 7.333 5.333 6 4 4.667z"),__sv.attr(s,"fill","currentColor"),__sv.attr(e,"class",__sv.null_to_empty(`screw-${t[6]}`)+" svelte-1ugmpjz"),__sv.attr(e,"width","12"),__sv.attr(e,"height","12"),__sv.attr(e,"fill","none"),__sv.attr(e,"xmlns","http://www.w3.org/2000/svg")},m(t,_){__sv.insert(t,e,_),__sv.append(e,s)},d(t){t&&__sv.detach(e)}}}function _(_){let l,n,o,r,a=_[0]&&e(_);const i=_[5].default,v=__sv.create_slot(i,_,_[4],null);let p=[1,2,3,4],c=[];for(let e=0;e<4;e+=1)c[e]=s(t(_,p,e));return{c(){l=__sv.element("div"),a&&a.c(),n=__sv.space(),v&&v.c(),o=__sv.space();for(let t=0;t<4;t+=1)c[t].c();__sv.attr(l,"draggable",""),__sv.set_style(l,"background-repeat","no-repeat"),__sv.set_style(l,"background-color",_[1]),__sv.set_style(l,"background-image",(_[3]?`url('${_[3]}')`:"none")+" "),__sv.set_style(l,"color","var(--color-"+(_[2]?"dark":"light")+")"),__sv.attr(l,"class","svelte-1ugmpjz")},m(t,e){__sv.insert(t,l,e),a&&a.m(l,null),__sv.append(l,n),v&&v.m(l,null),__sv.append(l,o);for(let t=0;t<4;t+=1)c[t].m(l,null);r=!0},p(t,[s]){t[0]?a?a.p(t,s):(a=e(t),a.c(),a.m(l,n)):a&&(a.d(1),a=null),v&&v.p&&16&s&&__sv.update_slot(v,i,t,t[4],s,null,null),(!r||2&s)&&__sv.set_style(l,"background-color",t[1]),(!r||8&s)&&__sv.set_style(l,"background-image",(t[3]?`url('${t[3]}')`:"none")+" "),(!r||4&s)&&__sv.set_style(l,"color","var(--color-"+(t[2]?"dark":"light")+")")},i(t){r||(__sv.transition_in(v,t),r=!0)},o(t){__sv.transition_out(v,t),r=!1},d(t){t&&__sv.detach(l),a&&a.d(),v&&v.d(t),__sv.destroy_each(c,t)}}}function l(t,e,s){let{$$slots:_={},$$scope:l}=e,{title:n}=e,{color:o="var(--color-dark)"}=e,{light:r=!1}=e,{image:a=!1}=e;return t.$$set=t=>{"title"in t&&s(0,n=t.title),"color"in t&&s(1,o=t.color),"light"in t&&s(2,r=t.light),"image"in t&&s(3,a=t.image),"$$scope"in t&&s(4,l=t.$$scope)},[n,o,r,a,l,_]}class n extends __sv.SvelteComponent{constructor(t){var e;super(),document.getElementById("svelte-1ugmpjz-style")||((e=__sv.element("style")).id="svelte-1ugmpjz-style",e.textContent="div.svelte-1ugmpjz{display:block;width:100%;height:100%;position:relative}h1.svelte-1ugmpjz,svg.svelte-1ugmpjz{pointer-events:none}h1.svelte-1ugmpjz{font-family:'Routed Gothic Wide';font-size:14px;line-height:14px;position:absolute;text-align:center;top:24px;width:100%}svg.svelte-1ugmpjz{position:absolute;opacity:0.4}.screw-1.svelte-1ugmpjz,.screw-2.svelte-1ugmpjz{top:2px}.screw-3.svelte-1ugmpjz,.screw-4.svelte-1ugmpjz{bottom:3px}.screw-1.svelte-1ugmpjz,.screw-3.svelte-1ugmpjz{left:2px}.screw-2.svelte-1ugmpjz,.screw-4.svelte-1ugmpjz{right:2px}",__sv.append(document.head,e)),__sv.init(this,t,l,_,__sv.safe_not_equal,{title:0,color:1,light:2,image:3})}}function o(t){let e,s;const _=t[2].default,l=__sv.create_slot(_,t,t[1],null);return{c(){e=__sv.element("div"),l&&l.c(),__sv.set_style(e,"transform","translate(-50%, "+t[0]+"px)"),__sv.attr(e,"class","svelte-1tqe9w8")},m(t,_){__sv.insert(t,e,_),l&&l.m(e,null),s=!0},p(t,[n]){l&&l.p&&2&n&&__sv.update_slot(l,_,t,t[1],n,null,null),(!s||1&n)&&__sv.set_style(e,"transform","translate(-50%, "+t[0]+"px)")},i(t){s||(__sv.transition_in(l,t),s=!0)},o(t){__sv.transition_out(l,t),s=!1},d(t){t&&__sv.detach(e),l&&l.d(t)}}}function r(t,e,s){let{$$slots:_={},$$scope:l}=e,{top:n=1}=e;return t.$$set=t=>{"top"in t&&s(0,n=t.top),"$$scope"in t&&s(1,l=t.$$scope)},[n,l,_]}class a extends __sv.SvelteComponent{constructor(t){var e;super(),document.getElementById("svelte-1tqe9w8-style")||((e=__sv.element("style")).id="svelte-1tqe9w8-style",e.textContent="div.svelte-1tqe9w8{top:100%;left:50%;position:absolute;pointer-events:none;font-family:'Routed Gothic';font-size:11px;color:inherit;white-space:nowrap}",__sv.append(document.head,e)),__sv.init(this,t,r,o,__sv.safe_not_equal,{top:0})}}function i(t){let e,s;return e=new a({props:{$$slots:{default:[v]},$$scope:{ctx:t}}}),{c(){__sv.create_component(e.$$.fragment)},m(t,_){__sv.mount_component(e,t,_),s=!0},p(t,s){const _={};260&s&&(_.$$scope={dirty:s,ctx:t}),e.$set(_)},i(t){s||(__sv.transition_in(e.$$.fragment,t),s=!0)},o(t){__sv.transition_out(e.$$.fragment,t),s=!1},d(t){__sv.destroy_component(e,t)}}}function v(t){let e;return{c(){e=__sv.text(t[2])},m(t,s){__sv.insert(t,e,s)},p(t,s){4&s&&__sv.set_data(e,t[2])},d(t){t&&__sv.detach(e)}}}function p(t){let e,s,_=t[2]&&i(t);return{c(){e=__sv.element("div"),_&&_.c(),__sv.attr(e,"aria-label","light"),__sv.set_style(e,"left",t[6]+"px"),__sv.set_style(e,"top",t[7]+"px"),__sv.set_style(e,"background-color",t[5]),__sv.attr(e,"class","svelte-17lm5sf"),__sv.toggle_class(e,"on",t[0]===t[1]||t[0]&&"boolean"==typeof t[0]),__sv.toggle_class(e,"square",t[3]),__sv.toggle_class(e,"high",t[4])},m(t,l){__sv.insert(t,e,l),_&&_.m(e,null),s=!0},p(t,[l]){t[2]?_?(_.p(t,l),4&l&&__sv.transition_in(_,1)):(_=i(t),_.c(),__sv.transition_in(_,1),_.m(e,null)):_&&(__sv.group_outros(),__sv.transition_out(_,1,1,(()=>{_=null})),__sv.check_outros()),(!s||64&l)&&__sv.set_style(e,"left",t[6]+"px"),(!s||128&l)&&__sv.set_style(e,"top",t[7]+"px"),(!s||32&l)&&__sv.set_style(e,"background-color",t[5]),3&l&&__sv.toggle_class(e,"on",t[0]===t[1]||t[0]&&"boolean"==typeof t[0]),8&l&&__sv.toggle_class(e,"square",t[3]),16&l&&__sv.toggle_class(e,"high",t[4])},i(t){s||(__sv.transition_in(_),s=!0)},o(t){__sv.transition_out(_),s=!1},d(t){t&&__sv.detach(e),_&&_.d()}}}function c(t,e,s){let{value:_}=e,{set:l}=e,{label:n}=e,{square:o}=e,{high:r}=e,{hue:a}=e,{x:i=0}=e,{y:v=0}=e;return t.$$set=t=>{"value"in t&&s(0,_=t.value),"set"in t&&s(1,l=t.set),"label"in t&&s(2,n=t.label),"square"in t&&s(3,o=t.square),"high"in t&&s(4,r=t.high),"hue"in t&&s(5,a=t.hue),"x"in t&&s(6,i=t.x),"y"in t&&s(7,v=t.y)},[_,l,n,o,r,a,i,v]}class u extends __sv.SvelteComponent{constructor(t){var e;super(),document.getElementById("svelte-17lm5sf-style")||((e=__sv.element("style")).id="svelte-17lm5sf-style",e.textContent="div.svelte-17lm5sf{position:absolute;width:12px;height:12px;border-radius:12px;background:var(--color-dark);border:1px solid rgba(0, 0, 0, 0.32);box-shadow:inset 2px 2px 0px rgba(255, 255, 255, 0.08), 0px 0px 0px 2px rgba(0, 0, 0, 0.12);color:inherit}div.high.svelte-17lm5sf{background:var(--color-dark-highlight)}div.square.svelte-17lm5sf{width:20px;height:20px;border-radius:3px}div.on.svelte-17lm5sf{background:hue;box-shadow:inset 2px 2px 0px rgba(255, 255, 255, 0.24), 0px 0px 0px 2px rgba(0, 0, 0, 0.12)}div.on.high.svelte-17lm5sf{background:var(--color-on-highlight)}",__sv.append(document.head,e)),__sv.init(this,t,c,p,__sv.safe_not_equal,{value:0,set:1,label:2,square:3,high:4,hue:5,x:6,y:7})}}export{n as F,u as L};