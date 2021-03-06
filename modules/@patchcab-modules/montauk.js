
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { onMount, Knob, Patch } from '/js/core.js';
import { F as Faceplate, L as Light } from './Light-6e622538.js';

/* src/TIDE_MONY.svelte generated by Svelte v3.31.2 */

function create_default_slot(ctx) {
	let light;
	let updating_hue;
	let updating_value;
	let t0;
	let knob0;
	let updating_value_1;
	let t1;
	let knob1;
	let updating_value_2;
	let t2;
	let knob2;
	let updating_value_3;
	let t3;
	let knob3;
	let updating_value_4;
	let t4;
	let knob4;
	let updating_value_5;
	let t5;
	let button;
	let t7;
	let patch0;
	let t8;
	let patch1;
	let current;
	let mounted;
	let dispose;

	function light_hue_binding(value) {
		/*light_hue_binding*/ ctx[5].call(null, value);
	}

	function light_value_binding(value) {
		/*light_value_binding*/ ctx[6].call(null, value);
	}

	let light_props = {
		x: 96,
		y: 56,
		label: "web",
		set: "fetched"
	};

	if (/*state*/ ctx[0].hue !== void 0) {
		light_props.hue = /*state*/ ctx[0].hue;
	}

	if (/*state*/ ctx[0].fetched !== void 0) {
		light_props.value = /*state*/ ctx[0].fetched;
	}

	light = new Light({ props: light_props });
	__sv.binding_callbacks.push(() => __sv.bind(light, "hue", light_hue_binding));
	__sv.binding_callbacks.push(() => __sv.bind(light, "value", light_value_binding));

	function knob0_value_binding(value) {
		/*knob0_value_binding*/ ctx[7].call(null, value);
	}

	let knob0_props = {
		label: "rate",
		x: 10,
		y: 60,
		min: 0.000022,
		max: 1,
		precision: 6
	};

	if (/*state*/ ctx[0].rate !== void 0) {
		knob0_props.value = /*state*/ ctx[0].rate;
	}

	knob0 = new Knob({ props: knob0_props });
	__sv.binding_callbacks.push(() => __sv.bind(knob0, "value", knob0_value_binding));

	function knob1_value_binding(value) {
		/*knob1_value_binding*/ ctx[8].call(null, value);
	}

	let knob1_props = {
		size: "s",
		label: "milli",
		x: 76,
		y: 100,
		min: 0,
		max: 100,
		precision: 2
	};

	if (/*state*/ ctx[0].milli !== void 0) {
		knob1_props.value = /*state*/ ctx[0].milli;
	}

	knob1 = new Knob({ props: knob1_props });
	__sv.binding_callbacks.push(() => __sv.bind(knob1, "value", knob1_value_binding));

	function knob2_value_binding(value) {
		/*knob2_value_binding*/ ctx[9].call(null, value);
	}

	let knob2_props = {
		size: "s",
		label: "micro",
		x: 76,
		y: 170,
		min: 0,
		max: 100,
		precision: 2
	};

	if (/*state*/ ctx[0].micro !== void 0) {
		knob2_props.value = /*state*/ ctx[0].micro;
	}

	knob2 = new Knob({ props: knob2_props });
	__sv.binding_callbacks.push(() => __sv.bind(knob2, "value", knob2_value_binding));

	function knob3_value_binding(value) {
		/*knob3_value_binding*/ ctx[10].call(null, value);
	}

	let knob3_props = {
		size: "s",
		label: "start",
		x: 18,
		y: 218,
		min: 0,
		max: 1,
		precision: 2
	};

	if (/*state*/ ctx[0].fm !== void 0) {
		knob3_props.value = /*state*/ ctx[0].fm;
	}

	knob3 = new Knob({ props: knob3_props });
	__sv.binding_callbacks.push(() => __sv.bind(knob3, "value", knob3_value_binding));

	function knob4_value_binding(value) {
		/*knob4_value_binding*/ ctx[11].call(null, value);
	}

	let knob4_props = {
		size: "s",
		label: "length",
		x: 18,
		y: 300,
		min: 1,
		max: 100,
		precision: 2
	};

	if (/*state*/ ctx[0].trimix !== void 0) {
		knob4_props.value = /*state*/ ctx[0].trimix;
	}

	knob4 = new Knob({ props: knob4_props });
	__sv.binding_callbacks.push(() => __sv.bind(knob4, "value", knob4_value_binding));

	patch0 = new Patch({
			props: {
				label: "fm",
				x: 24,
				y: 155,
				name: "signal-in",
				input: /*scale*/ ctx[1],
				onConnect: /*onConnect*/ ctx[4]
			}
		});

	patch1 = new Patch({
			props: {
				label: "out",
				x: 92,
				y: 320,
				name: "audio-out",
				output: /*player*/ ctx[2]
			}
		});

	return {
		c() {
			__sv.create_component(light.$$.fragment);
			t0 = __sv.space();
			__sv.create_component(knob0.$$.fragment);
			t1 = __sv.space();
			__sv.create_component(knob1.$$.fragment);
			t2 = __sv.space();
			__sv.create_component(knob2.$$.fragment);
			t3 = __sv.space();
			__sv.create_component(knob3.$$.fragment);
			t4 = __sv.space();
			__sv.create_component(knob4.$$.fragment);
			t5 = __sv.space();
			button = __sv.element("button");
			button.textContent = "dbg";
			t7 = __sv.space();
			__sv.create_component(patch0.$$.fragment);
			t8 = __sv.space();
			__sv.create_component(patch1.$$.fragment);
			__sv.set_style(button, "color", "#111");
			__sv.set_style(button, "background-color", "#0fa");
			__sv.set_style(button, "border-radius", "20px");
		},
		m(target, anchor) {
			__sv.mount_component(light, target, anchor);
			__sv.insert(target, t0, anchor);
			__sv.mount_component(knob0, target, anchor);
			__sv.insert(target, t1, anchor);
			__sv.mount_component(knob1, target, anchor);
			__sv.insert(target, t2, anchor);
			__sv.mount_component(knob2, target, anchor);
			__sv.insert(target, t3, anchor);
			__sv.mount_component(knob3, target, anchor);
			__sv.insert(target, t4, anchor);
			__sv.mount_component(knob4, target, anchor);
			__sv.insert(target, t5, anchor);
			__sv.insert(target, button, anchor);
			__sv.insert(target, t7, anchor);
			__sv.mount_component(patch0, target, anchor);
			__sv.insert(target, t8, anchor);
			__sv.mount_component(patch1, target, anchor);
			current = true;

			if (!mounted) {
				dispose = __sv.listen(button, "click", /*test*/ ctx[3]);
				mounted = true;
			}
		},
		p(ctx, dirty) {
			const light_changes = {};

			if (!updating_hue && dirty & /*state*/ 1) {
				updating_hue = true;
				light_changes.hue = /*state*/ ctx[0].hue;
				__sv.add_flush_callback(() => updating_hue = false);
			}

			if (!updating_value && dirty & /*state*/ 1) {
				updating_value = true;
				light_changes.value = /*state*/ ctx[0].fetched;
				__sv.add_flush_callback(() => updating_value = false);
			}

			light.$set(light_changes);
			const knob0_changes = {};

			if (!updating_value_1 && dirty & /*state*/ 1) {
				updating_value_1 = true;
				knob0_changes.value = /*state*/ ctx[0].rate;
				__sv.add_flush_callback(() => updating_value_1 = false);
			}

			knob0.$set(knob0_changes);
			const knob1_changes = {};

			if (!updating_value_2 && dirty & /*state*/ 1) {
				updating_value_2 = true;
				knob1_changes.value = /*state*/ ctx[0].milli;
				__sv.add_flush_callback(() => updating_value_2 = false);
			}

			knob1.$set(knob1_changes);
			const knob2_changes = {};

			if (!updating_value_3 && dirty & /*state*/ 1) {
				updating_value_3 = true;
				knob2_changes.value = /*state*/ ctx[0].micro;
				__sv.add_flush_callback(() => updating_value_3 = false);
			}

			knob2.$set(knob2_changes);
			const knob3_changes = {};

			if (!updating_value_4 && dirty & /*state*/ 1) {
				updating_value_4 = true;
				knob3_changes.value = /*state*/ ctx[0].fm;
				__sv.add_flush_callback(() => updating_value_4 = false);
			}

			knob3.$set(knob3_changes);
			const knob4_changes = {};

			if (!updating_value_5 && dirty & /*state*/ 1) {
				updating_value_5 = true;
				knob4_changes.value = /*state*/ ctx[0].trimix;
				__sv.add_flush_callback(() => updating_value_5 = false);
			}

			knob4.$set(knob4_changes);
			const patch0_changes = {};
			if (dirty & /*scale*/ 2) patch0_changes.input = /*scale*/ ctx[1];
			patch0.$set(patch0_changes);
			const patch1_changes = {};
			if (dirty & /*player*/ 4) patch1_changes.output = /*player*/ ctx[2];
			patch1.$set(patch1_changes);
		},
		i(local) {
			if (current) return;
			__sv.transition_in(light.$$.fragment, local);
			__sv.transition_in(knob0.$$.fragment, local);
			__sv.transition_in(knob1.$$.fragment, local);
			__sv.transition_in(knob2.$$.fragment, local);
			__sv.transition_in(knob3.$$.fragment, local);
			__sv.transition_in(knob4.$$.fragment, local);
			__sv.transition_in(patch0.$$.fragment, local);
			__sv.transition_in(patch1.$$.fragment, local);
			current = true;
		},
		o(local) {
			__sv.transition_out(light.$$.fragment, local);
			__sv.transition_out(knob0.$$.fragment, local);
			__sv.transition_out(knob1.$$.fragment, local);
			__sv.transition_out(knob2.$$.fragment, local);
			__sv.transition_out(knob3.$$.fragment, local);
			__sv.transition_out(knob4.$$.fragment, local);
			__sv.transition_out(patch0.$$.fragment, local);
			__sv.transition_out(patch1.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			__sv.destroy_component(light, detaching);
			if (detaching) __sv.detach(t0);
			__sv.destroy_component(knob0, detaching);
			if (detaching) __sv.detach(t1);
			__sv.destroy_component(knob1, detaching);
			if (detaching) __sv.detach(t2);
			__sv.destroy_component(knob2, detaching);
			if (detaching) __sv.detach(t3);
			__sv.destroy_component(knob3, detaching);
			if (detaching) __sv.detach(t4);
			__sv.destroy_component(knob4, detaching);
			if (detaching) __sv.detach(t5);
			if (detaching) __sv.detach(button);
			if (detaching) __sv.detach(t7);
			__sv.destroy_component(patch0, detaching);
			if (detaching) __sv.detach(t8);
			__sv.destroy_component(patch1, detaching);
			mounted = false;
			dispose();
		}
	};
}

function create_fragment(ctx) {
	let faceplate;
	let current;

	faceplate = new Faceplate({
			props: {
				title: "Montauk",
				color: "#563696",
				image: "../assets/itea-bg-1.svg",
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			__sv.create_component(faceplate.$$.fragment);
		},
		m(target, anchor) {
			__sv.mount_component(faceplate, target, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			const faceplate_changes = {};

			if (dirty & /*$$scope, player, scale, state*/ 262151) {
				faceplate_changes.$$scope = { dirty, ctx };
			}

			faceplate.$set(faceplate_changes);
		},
		i(local) {
			if (current) return;
			__sv.transition_in(faceplate.$$.fragment, local);
			current = true;
		},
		o(local) {
			__sv.transition_out(faceplate.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			__sv.destroy_component(faceplate, detaching);
		}
	};
}

const MIN = 0;
const MAX = 1;

function instance($$self, $$props, $$invalidate) {
	var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
		function adopt(value) {
			return value instanceof P
			? value
			: new P(function (resolve) {
						resolve(value);
					});
		}

		return new (P || (P = Promise))(function (resolve, reject) {
				function fulfilled(value) {
					try {
						step(generator.next(value));
					} catch(e) {
						reject(e);
					}
				}

				function rejected(value) {
					try {
						step(generator["throw"](value));
					} catch(e) {
						reject(e);
					}
				}

				function step(result) {
					result.done
					? resolve(result.value)
					: adopt(result.value).then(fulfilled, rejected);
				}

				step((generator = generator.apply(thisArg, _arguments || [])).next());
			});
	};

	
	console.log("../../src/itea_bg.svg");

	let { state = {
		freq: 440,
		type: "sine",
		fm: 1,
		trimix: 0.5,
		fetched: false,
		data: null,
		hue: "#ffc75e",
		rate: 1,
		milli: 0,
		micro: 0
	} } = $$props;

	const crossFade = new Tone.CrossFade();
	const osc1 = new Tone.Oscillator(state.freq, state.type).connect(crossFade.a).start();
	const osc2 = new Tone.Oscillator(state.freq, "sawtooth").connect(crossFade.b).start();
	const scale = new Tone.Scale(MIN, MAX);

	const remap = (num, in_min, in_max, out_min, out_max) => {
		return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
	};

	let buffer;
	let player = new Tone.Player();

	// let player = new Player('https://upload.wikimedia.org/wikipedia/commons/8/80/Field_cricket_Gryllus_pennsylvanicus.ogg')
	onMount(() => __awaiter(void 0, void 0, void 0, function* () {
		try {
			let corsProxy = `http://localhost:8080/`;
			let fetchUrl = `http://www.ioc-sealevelmonitoring.org/service.php?query=data&format=json&code=${"mony2"}&includesensors[]=pwl&timestop=now&timestart=`;
			let today = new Date();
			let minute = 60 * 1000;
			let tidalperiod = 745 * minute;
			let twoweeks = minute * 20160;
			let tidemonth = 2 * twoweeks;
			let tidemonthago = today - tidemonth;
			let tideperiodago = today - tidalperiod;
			let y = new Date(tideperiodago);
			let dateQuery = y.toISOString().slice(0, -5);
			let query = `${corsProxy}${fetchUrl}${dateQuery}`;
			console.log(query);

			const res = yield fetch(query, {
				method: "GET",
				headers: { "Content-Type": "application/json" }
			});

			const data = yield res.json();
			console.log(data);

			// here we can scale the data
			// tides = [] 
			// for i in data
			// tides[i] = data.slevel
			// then, tides max and tides min
			// for i in tides, map/scale
			// scaled tides 
			// state.data = scaledTides
			let tides = [];

			let maxLevel = 0;
			let minLevel = 10000;

			for (let i = 0; i < data.length; i++) {
				tides[i] = data[i].slevel;

				if (tides[i] > maxLevel) {
					maxLevel = tides[i];
				}

				if (tides[i] < minLevel) {
					minLevel = tides[i];
				}
			}

			for (let i = 0; i < tides.length; i++) {
				// remap = (num, in_min, in_max, out_min, out_max)
				tides[i] = remap(tides[i], minLevel, maxLevel, -1, 1);
			}

			$$invalidate(0, state.data = tides, state);
			$$invalidate(0, state.fetched = true, state);
			$$invalidate(0, state.hue = "#42a4ff", state);
			buffer = new Tone.ToneAudioBuffer().fromArray(new Float32Array(state.data.length));

			for (var channel = 0; channel < buffer.numberOfChannels; channel++) {
				// This gives us the actual array that contains the data
				var nowBuffering = buffer.getChannelData(channel);

				for (var i = 0; i < buffer.length; i++) {
					// nowBuffering[i] = state.data[i].slevel
					nowBuffering[i] = state.data[i];
				}
			}

			// player = new Player('https://upload.wikimedia.org/wikipedia/commons/8/80/Field_cricket_Gryllus_pennsylvanicus.ogg')
			$$invalidate(2, player = new Tone.Player(buffer));

			// player.load(buffer)
			if (player.loaded) {
				player.start();
			} else {
				$$invalidate(2, player.autostart = true, player);
			}

			$$invalidate(2, player.loop = true, player);
		} catch(err) {
			console.log(err); // console.log(buffer)
			$$invalidate(0, state.hue = "#eb3495", state);
		} // here, load local json
	}));

	const test = e => {
		
	}; // let milliAdjust = state.milli / 1000
	// let microAdjust = state.micro / 1000000
	// console.log(tides)

	const onConnect = nodes => {
		if (nodes) {
			scale.connect(osc1.frequency);
			scale.connect(osc2.frequency);
		} else {
			scale.disconnect(osc1.frequency);
			osc1.frequency.overridden = false;
			osc1.frequency.value = state.freq;
			scale.disconnect(osc2.frequency);
			osc2.frequency.overridden = false;
			osc2.frequency.value = state.freq;
		}
	};

	function light_hue_binding(value) {
		state.hue = value;
		$$invalidate(0, state);
	}

	function light_value_binding(value) {
		state.fetched = value;
		$$invalidate(0, state);
	}

	function knob0_value_binding(value) {
		state.rate = value;
		$$invalidate(0, state);
	}

	function knob1_value_binding(value) {
		state.milli = value;
		$$invalidate(0, state);
	}

	function knob2_value_binding(value) {
		state.micro = value;
		$$invalidate(0, state);
	}

	function knob3_value_binding(value) {
		state.fm = value;
		$$invalidate(0, state);
	}

	function knob4_value_binding(value) {
		state.trimix = value;
		$$invalidate(0, state);
	}

	$$self.$$set = $$props => {
		if ("state" in $$props) $$invalidate(0, state = $$props.state);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*state*/ 1) {
			// $: osc1.frequency.value = state.freq;
			// $: osc1.frequency.value = state.rate;
			 $$invalidate(2, player.playbackRate = state.rate + state.milli / 1000 + state.micro / 1000000, player);
		}

		if ($$self.$$.dirty & /*state*/ 1) {
			 osc2.frequency.value = state.freq;
		}

		if ($$self.$$.dirty & /*state*/ 1) {
			 osc1.type = state.type;
		}

		if ($$self.$$.dirty & /*state*/ 1) {
			 crossFade.fade.value = state.trimix;
		}

		if ($$self.$$.dirty & /*state*/ 1) {
			// $: scale.min = Math.max(MIN, state.freq - state.freq * state.fm);
			// $: scale.max = Math.min(MAX, state.freq + (MAX - state.freq) * state.fm);
			 $$invalidate(1, scale.min = Math.max(MIN, state.rate - state.rate * state.fm), scale);
		}

		if ($$self.$$.dirty & /*state*/ 1) {
			 $$invalidate(1, scale.max = Math.min(MAX, state.rate + (MAX - state.rate) * state.fm), scale);
		}
	};

	return [
		state,
		scale,
		player,
		test,
		onConnect,
		light_hue_binding,
		light_value_binding,
		knob0_value_binding,
		knob1_value_binding,
		knob2_value_binding,
		knob3_value_binding,
		knob4_value_binding
	];
}

class TIDE_MONY extends __sv.SvelteComponent {
	constructor(options) {
		super();
		__sv.init(this, options, instance, create_fragment, __sv.safe_not_equal, { state: 0 });
	}
}

export default TIDE_MONY;
