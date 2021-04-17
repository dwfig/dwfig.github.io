
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { Faceplate, Bang, Knob, Patch } from '/js/core.js';

/* src/ADSR.svelte generated by Svelte v3.31.2 */

function create_default_slot(ctx) {
	let knob0;
	let updating_value;
	let t0;
	let knob1;
	let updating_value_1;
	let t1;
	let knob2;
	let updating_value_2;
	let t2;
	let knob3;
	let updating_value_3;
	let t3;
	let patch0;
	let t4;
	let patch1;
	let current;

	function knob0_value_binding(value) {
		/*knob0_value_binding*/ ctx[3].call(null, value);
	}

	let knob0_props = {
		size: "s",
		label: "attack",
		x: 27,
		y: 60,
		min: 0,
		max: 2,
		precision: 2,
		steps: 1200
	};

	if (/*state*/ ctx[0].attack !== void 0) {
		knob0_props.value = /*state*/ ctx[0].attack;
	}

	knob0 = new Knob({ props: knob0_props });
	__sv.binding_callbacks.push(() => __sv.bind(knob0, "value", knob0_value_binding));

	function knob1_value_binding(value) {
		/*knob1_value_binding*/ ctx[4].call(null, value);
	}

	let knob1_props = {
		size: "s",
		label: "decay",
		x: 27,
		y: 122,
		min: 0,
		max: 2,
		precision: 2,
		steps: 1200
	};

	if (/*state*/ ctx[0].decay !== void 0) {
		knob1_props.value = /*state*/ ctx[0].decay;
	}

	knob1 = new Knob({ props: knob1_props });
	__sv.binding_callbacks.push(() => __sv.bind(knob1, "value", knob1_value_binding));

	function knob2_value_binding(value) {
		/*knob2_value_binding*/ ctx[5].call(null, value);
	}

	let knob2_props = {
		size: "s",
		label: "sustain",
		x: 27,
		y: 186,
		min: 0,
		max: 1,
		precision: 2,
		steps: 1000
	};

	if (/*state*/ ctx[0].sustain !== void 0) {
		knob2_props.value = /*state*/ ctx[0].sustain;
	}

	knob2 = new Knob({ props: knob2_props });
	__sv.binding_callbacks.push(() => __sv.bind(knob2, "value", knob2_value_binding));

	function knob3_value_binding(value) {
		/*knob3_value_binding*/ ctx[6].call(null, value);
	}

	let knob3_props = {
		size: "s",
		label: "release",
		x: 27,
		y: 250,
		min: 0,
		max: 5,
		precision: 2,
		steps: 1000
	};

	if (/*state*/ ctx[0].release !== void 0) {
		knob3_props.value = /*state*/ ctx[0].release;
	}

	knob3 = new Knob({ props: knob3_props });
	__sv.binding_callbacks.push(() => __sv.bind(knob3, "value", knob3_value_binding));

	patch0 = new Patch({
			props: {
				label: "gate",
				x: 20,
				y: 320,
				name: "gate",
				input: /*bang*/ ctx[2]
			}
		});

	patch1 = new Patch({
			props: {
				label: "out",
				x: 60,
				y: 320,
				name: "cv",
				output: /*envelope*/ ctx[1]
			}
		});

	return {
		c() {
			__sv.create_component(knob0.$$.fragment);
			t0 = __sv.space();
			__sv.create_component(knob1.$$.fragment);
			t1 = __sv.space();
			__sv.create_component(knob2.$$.fragment);
			t2 = __sv.space();
			__sv.create_component(knob3.$$.fragment);
			t3 = __sv.space();
			__sv.create_component(patch0.$$.fragment);
			t4 = __sv.space();
			__sv.create_component(patch1.$$.fragment);
		},
		m(target, anchor) {
			__sv.mount_component(knob0, target, anchor);
			__sv.insert(target, t0, anchor);
			__sv.mount_component(knob1, target, anchor);
			__sv.insert(target, t1, anchor);
			__sv.mount_component(knob2, target, anchor);
			__sv.insert(target, t2, anchor);
			__sv.mount_component(knob3, target, anchor);
			__sv.insert(target, t3, anchor);
			__sv.mount_component(patch0, target, anchor);
			__sv.insert(target, t4, anchor);
			__sv.mount_component(patch1, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const knob0_changes = {};

			if (!updating_value && dirty & /*state*/ 1) {
				updating_value = true;
				knob0_changes.value = /*state*/ ctx[0].attack;
				__sv.add_flush_callback(() => updating_value = false);
			}

			knob0.$set(knob0_changes);
			const knob1_changes = {};

			if (!updating_value_1 && dirty & /*state*/ 1) {
				updating_value_1 = true;
				knob1_changes.value = /*state*/ ctx[0].decay;
				__sv.add_flush_callback(() => updating_value_1 = false);
			}

			knob1.$set(knob1_changes);
			const knob2_changes = {};

			if (!updating_value_2 && dirty & /*state*/ 1) {
				updating_value_2 = true;
				knob2_changes.value = /*state*/ ctx[0].sustain;
				__sv.add_flush_callback(() => updating_value_2 = false);
			}

			knob2.$set(knob2_changes);
			const knob3_changes = {};

			if (!updating_value_3 && dirty & /*state*/ 1) {
				updating_value_3 = true;
				knob3_changes.value = /*state*/ ctx[0].release;
				__sv.add_flush_callback(() => updating_value_3 = false);
			}

			knob3.$set(knob3_changes);
			const patch1_changes = {};
			if (dirty & /*envelope*/ 2) patch1_changes.output = /*envelope*/ ctx[1];
			patch1.$set(patch1_changes);
		},
		i(local) {
			if (current) return;
			__sv.transition_in(knob0.$$.fragment, local);
			__sv.transition_in(knob1.$$.fragment, local);
			__sv.transition_in(knob2.$$.fragment, local);
			__sv.transition_in(knob3.$$.fragment, local);
			__sv.transition_in(patch0.$$.fragment, local);
			__sv.transition_in(patch1.$$.fragment, local);
			current = true;
		},
		o(local) {
			__sv.transition_out(knob0.$$.fragment, local);
			__sv.transition_out(knob1.$$.fragment, local);
			__sv.transition_out(knob2.$$.fragment, local);
			__sv.transition_out(knob3.$$.fragment, local);
			__sv.transition_out(patch0.$$.fragment, local);
			__sv.transition_out(patch1.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			__sv.destroy_component(knob0, detaching);
			if (detaching) __sv.detach(t0);
			__sv.destroy_component(knob1, detaching);
			if (detaching) __sv.detach(t1);
			__sv.destroy_component(knob2, detaching);
			if (detaching) __sv.detach(t2);
			__sv.destroy_component(knob3, detaching);
			if (detaching) __sv.detach(t3);
			__sv.destroy_component(patch0, detaching);
			if (detaching) __sv.detach(t4);
			__sv.destroy_component(patch1, detaching);
		}
	};
}

function create_fragment(ctx) {
	let faceplate;
	let current;

	faceplate = new Faceplate({
			props: {
				title: "ADSR",
				color: "var(--color-5)",
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

			if (dirty & /*$$scope, envelope, state*/ 131) {
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

function instance($$self, $$props, $$invalidate) {
	let { state = {
		attack: 0.5,
		decay: 0.1,
		sustain: 0.5,
		release: 1
	} } = $$props;

	const envelope = new Tone.Envelope(state.attack, state.decay, state.sustain, state.release);

	const bang = new Bang((time, bangAttack, bangRelease) => {
			if (bangAttack && bangRelease) {
				envelope.triggerAttackRelease(0.05, time);
			} else if (bangAttack) {
				envelope.triggerAttack(time);
			} else if (bangRelease) {
				envelope.triggerRelease(time);
			}
		});

	function knob0_value_binding(value) {
		state.attack = value;
		$$invalidate(0, state);
	}

	function knob1_value_binding(value) {
		state.decay = value;
		$$invalidate(0, state);
	}

	function knob2_value_binding(value) {
		state.sustain = value;
		$$invalidate(0, state);
	}

	function knob3_value_binding(value) {
		state.release = value;
		$$invalidate(0, state);
	}

	$$self.$$set = $$props => {
		if ("state" in $$props) $$invalidate(0, state = $$props.state);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*state*/ 1) {
			 $$invalidate(1, envelope.attack = state.attack, envelope);
		}

		if ($$self.$$.dirty & /*state*/ 1) {
			 $$invalidate(1, envelope.decay = state.decay, envelope);
		}

		if ($$self.$$.dirty & /*state*/ 1) {
			 $$invalidate(1, envelope.sustain = state.sustain, envelope);
		}

		if ($$self.$$.dirty & /*state*/ 1) {
			 $$invalidate(1, envelope.release = state.release, envelope);
		}
	};

	return [
		state,
		envelope,
		bang,
		knob0_value_binding,
		knob1_value_binding,
		knob2_value_binding,
		knob3_value_binding
	];
}

class ADSR extends __sv.SvelteComponent {
	constructor(options) {
		super();
		__sv.init(this, options, instance, create_fragment, __sv.safe_not_equal, { state: 0 });
	}
}

export default ADSR;