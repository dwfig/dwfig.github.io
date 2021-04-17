
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { Faceplate, Knob, Switch, Patch } from '/js/core.js';

/* src/LFO.svelte generated by Svelte v3.31.2 */

function create_default_slot(ctx) {
	let knob;
	let updating_value;
	let t0;
	let switch0;
	let updating_value_1;
	let t1;
	let switch1;
	let updating_value_2;
	let t2;
	let switch2;
	let updating_value_3;
	let t3;
	let switch3;
	let updating_value_4;
	let t4;
	let patch;
	let current;

	function knob_value_binding(value) {
		/*knob_value_binding*/ ctx[2].call(null, value);
	}

	let knob_props = {
		label: "frequency",
		x: 20,
		y: 60,
		min: MIN,
		max: MAX,
		precision: 3,
		steps: 1000
	};

	if (/*state*/ ctx[0].freq !== void 0) {
		knob_props.value = /*state*/ ctx[0].freq;
	}

	knob = new Knob({ props: knob_props });
	__sv.binding_callbacks.push(() => __sv.bind(knob, "value", knob_value_binding));

	function switch0_value_binding(value) {
		/*switch0_value_binding*/ ctx[3].call(null, value);
	}

	let switch0_props = { x: 20, y: 220, label: "sin", set: "sine" };

	if (/*state*/ ctx[0].type !== void 0) {
		switch0_props.value = /*state*/ ctx[0].type;
	}

	switch0 = new Switch({ props: switch0_props });
	__sv.binding_callbacks.push(() => __sv.bind(switch0, "value", switch0_value_binding));

	function switch1_value_binding(value) {
		/*switch1_value_binding*/ ctx[4].call(null, value);
	}

	let switch1_props = {
		x: 60,
		y: 220,
		label: "sqr",
		set: "square"
	};

	if (/*state*/ ctx[0].type !== void 0) {
		switch1_props.value = /*state*/ ctx[0].type;
	}

	switch1 = new Switch({ props: switch1_props });
	__sv.binding_callbacks.push(() => __sv.bind(switch1, "value", switch1_value_binding));

	function switch2_value_binding(value) {
		/*switch2_value_binding*/ ctx[5].call(null, value);
	}

	let switch2_props = {
		x: 20,
		y: 270,
		label: "tri",
		set: "triangle"
	};

	if (/*state*/ ctx[0].type !== void 0) {
		switch2_props.value = /*state*/ ctx[0].type;
	}

	switch2 = new Switch({ props: switch2_props });
	__sv.binding_callbacks.push(() => __sv.bind(switch2, "value", switch2_value_binding));

	function switch3_value_binding(value) {
		/*switch3_value_binding*/ ctx[6].call(null, value);
	}

	let switch3_props = {
		x: 60,
		y: 270,
		label: "saw",
		set: "sawtooth"
	};

	if (/*state*/ ctx[0].type !== void 0) {
		switch3_props.value = /*state*/ ctx[0].type;
	}

	switch3 = new Switch({ props: switch3_props });
	__sv.binding_callbacks.push(() => __sv.bind(switch3, "value", switch3_value_binding));

	patch = new Patch({
			props: {
				label: "out",
				x: 40,
				y: 320,
				name: "audio-out",
				output: /*node*/ ctx[1]
			}
		});

	return {
		c() {
			__sv.create_component(knob.$$.fragment);
			t0 = __sv.space();
			__sv.create_component(switch0.$$.fragment);
			t1 = __sv.space();
			__sv.create_component(switch1.$$.fragment);
			t2 = __sv.space();
			__sv.create_component(switch2.$$.fragment);
			t3 = __sv.space();
			__sv.create_component(switch3.$$.fragment);
			t4 = __sv.space();
			__sv.create_component(patch.$$.fragment);
		},
		m(target, anchor) {
			__sv.mount_component(knob, target, anchor);
			__sv.insert(target, t0, anchor);
			__sv.mount_component(switch0, target, anchor);
			__sv.insert(target, t1, anchor);
			__sv.mount_component(switch1, target, anchor);
			__sv.insert(target, t2, anchor);
			__sv.mount_component(switch2, target, anchor);
			__sv.insert(target, t3, anchor);
			__sv.mount_component(switch3, target, anchor);
			__sv.insert(target, t4, anchor);
			__sv.mount_component(patch, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const knob_changes = {};

			if (!updating_value && dirty & /*state*/ 1) {
				updating_value = true;
				knob_changes.value = /*state*/ ctx[0].freq;
				__sv.add_flush_callback(() => updating_value = false);
			}

			knob.$set(knob_changes);
			const switch0_changes = {};

			if (!updating_value_1 && dirty & /*state*/ 1) {
				updating_value_1 = true;
				switch0_changes.value = /*state*/ ctx[0].type;
				__sv.add_flush_callback(() => updating_value_1 = false);
			}

			switch0.$set(switch0_changes);
			const switch1_changes = {};

			if (!updating_value_2 && dirty & /*state*/ 1) {
				updating_value_2 = true;
				switch1_changes.value = /*state*/ ctx[0].type;
				__sv.add_flush_callback(() => updating_value_2 = false);
			}

			switch1.$set(switch1_changes);
			const switch2_changes = {};

			if (!updating_value_3 && dirty & /*state*/ 1) {
				updating_value_3 = true;
				switch2_changes.value = /*state*/ ctx[0].type;
				__sv.add_flush_callback(() => updating_value_3 = false);
			}

			switch2.$set(switch2_changes);
			const switch3_changes = {};

			if (!updating_value_4 && dirty & /*state*/ 1) {
				updating_value_4 = true;
				switch3_changes.value = /*state*/ ctx[0].type;
				__sv.add_flush_callback(() => updating_value_4 = false);
			}

			switch3.$set(switch3_changes);
			const patch_changes = {};
			if (dirty & /*node*/ 2) patch_changes.output = /*node*/ ctx[1];
			patch.$set(patch_changes);
		},
		i(local) {
			if (current) return;
			__sv.transition_in(knob.$$.fragment, local);
			__sv.transition_in(switch0.$$.fragment, local);
			__sv.transition_in(switch1.$$.fragment, local);
			__sv.transition_in(switch2.$$.fragment, local);
			__sv.transition_in(switch3.$$.fragment, local);
			__sv.transition_in(patch.$$.fragment, local);
			current = true;
		},
		o(local) {
			__sv.transition_out(knob.$$.fragment, local);
			__sv.transition_out(switch0.$$.fragment, local);
			__sv.transition_out(switch1.$$.fragment, local);
			__sv.transition_out(switch2.$$.fragment, local);
			__sv.transition_out(switch3.$$.fragment, local);
			__sv.transition_out(patch.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			__sv.destroy_component(knob, detaching);
			if (detaching) __sv.detach(t0);
			__sv.destroy_component(switch0, detaching);
			if (detaching) __sv.detach(t1);
			__sv.destroy_component(switch1, detaching);
			if (detaching) __sv.detach(t2);
			__sv.destroy_component(switch2, detaching);
			if (detaching) __sv.detach(t3);
			__sv.destroy_component(switch3, detaching);
			if (detaching) __sv.detach(t4);
			__sv.destroy_component(patch, detaching);
		}
	};
}

function create_fragment(ctx) {
	let faceplate;
	let current;

	faceplate = new Faceplate({
			props: {
				title: "LFO",
				color: "var(--color-2)",
				light: true,
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

			if (dirty & /*$$scope, node, state*/ 131) {
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

const MIN = 0.01;
const MAX = 20;

function instance($$self, $$props, $$invalidate) {
	
	let { state = { freq: 2, type: "sine" } } = $$props;
	const node = new Tone.LFO({ type: state.type, frequency: state.freq });
	node.start();

	function knob_value_binding(value) {
		state.freq = value;
		$$invalidate(0, state);
	}

	function switch0_value_binding(value) {
		state.type = value;
		$$invalidate(0, state);
	}

	function switch1_value_binding(value) {
		state.type = value;
		$$invalidate(0, state);
	}

	function switch2_value_binding(value) {
		state.type = value;
		$$invalidate(0, state);
	}

	function switch3_value_binding(value) {
		state.type = value;
		$$invalidate(0, state);
	}

	$$self.$$set = $$props => {
		if ("state" in $$props) $$invalidate(0, state = $$props.state);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*state*/ 1) {
			 $$invalidate(1, node.frequency.value = state.freq, node);
		}

		if ($$self.$$.dirty & /*state*/ 1) {
			 $$invalidate(1, node.type = state.type, node);
		}
	};

	return [
		state,
		node,
		knob_value_binding,
		switch0_value_binding,
		switch1_value_binding,
		switch2_value_binding,
		switch3_value_binding
	];
}

class LFO_1 extends __sv.SvelteComponent {
	constructor(options) {
		super();
		__sv.init(this, options, instance, create_fragment, __sv.safe_not_equal, { state: 0 });
	}
}

export default LFO_1;
