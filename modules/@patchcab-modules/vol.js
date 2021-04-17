
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { Faceplate, onMount, Volume, Patch } from '/js/core.js';

/* src/VOL.svelte generated by Svelte v3.31.2 */

function create_default_slot(ctx) {
	let volume;
	let updating_value;
	let t0;
	let patch0;
	let t1;
	let patch1;
	let t2;
	let patch2;
	let current;

	function volume_value_binding(value) {
		/*volume_value_binding*/ ctx[6].call(null, value);
	}

	let volume_props = {
		x: 24,
		y: 60,
		h: 204,
		min: /*MIN*/ ctx[3],
		max: MAX
	};

	if (/*state*/ ctx[0].volume !== void 0) {
		volume_props.value = /*state*/ ctx[0].volume;
	}

	volume = new Volume({ props: volume_props });
	__sv.binding_callbacks.push(() => __sv.bind(volume, "value", volume_value_binding));

	patch0 = new Patch({
			props: {
				label: "cv",
				x: 40,
				y: 280,
				name: "cv-1",
				input: /*scale*/ ctx[4],
				onConnect: /*onConnect*/ ctx[5]
			}
		});

	patch1 = new Patch({
			props: {
				label: "in",
				x: 20,
				y: 320,
				name: "audio-in",
				input: /*node*/ ctx[1]
			}
		});

	patch2 = new Patch({
			props: {
				label: "out",
				x: 60,
				y: 320,
				name: "audio-out",
				output: /*channel*/ ctx[2]
			}
		});

	return {
		c() {
			__sv.create_component(volume.$$.fragment);
			t0 = __sv.space();
			__sv.create_component(patch0.$$.fragment);
			t1 = __sv.space();
			__sv.create_component(patch1.$$.fragment);
			t2 = __sv.space();
			__sv.create_component(patch2.$$.fragment);
		},
		m(target, anchor) {
			__sv.mount_component(volume, target, anchor);
			__sv.insert(target, t0, anchor);
			__sv.mount_component(patch0, target, anchor);
			__sv.insert(target, t1, anchor);
			__sv.mount_component(patch1, target, anchor);
			__sv.insert(target, t2, anchor);
			__sv.mount_component(patch2, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const volume_changes = {};

			if (!updating_value && dirty & /*state*/ 1) {
				updating_value = true;
				volume_changes.value = /*state*/ ctx[0].volume;
				__sv.add_flush_callback(() => updating_value = false);
			}

			volume.$set(volume_changes);
			const patch1_changes = {};
			if (dirty & /*node*/ 2) patch1_changes.input = /*node*/ ctx[1];
			patch1.$set(patch1_changes);
			const patch2_changes = {};
			if (dirty & /*channel*/ 4) patch2_changes.output = /*channel*/ ctx[2];
			patch2.$set(patch2_changes);
		},
		i(local) {
			if (current) return;
			__sv.transition_in(volume.$$.fragment, local);
			__sv.transition_in(patch0.$$.fragment, local);
			__sv.transition_in(patch1.$$.fragment, local);
			__sv.transition_in(patch2.$$.fragment, local);
			current = true;
		},
		o(local) {
			__sv.transition_out(volume.$$.fragment, local);
			__sv.transition_out(patch0.$$.fragment, local);
			__sv.transition_out(patch1.$$.fragment, local);
			__sv.transition_out(patch2.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			__sv.destroy_component(volume, detaching);
			if (detaching) __sv.detach(t0);
			__sv.destroy_component(patch0, detaching);
			if (detaching) __sv.detach(t1);
			__sv.destroy_component(patch1, detaching);
			if (detaching) __sv.detach(t2);
			__sv.destroy_component(patch2, detaching);
		}
	};
}

function create_fragment(ctx) {
	let faceplate;
	let current;

	faceplate = new Faceplate({
			props: {
				title: "VOL",
				color: "var(--color-dark)",
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

			if (dirty & /*$$scope, channel, node, state*/ 263) {
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

const MAX = 2;

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

	const MIN = -80;
	let { state = { volume: MIN } } = $$props;
	const node = new Tone.Gain();
	const channel = new Tone.Channel(state.volume);
	const scale = new Tone.Scale(0, 1);

	const onConnect = nodes => {
		if (nodes) {
			scale.connect(node.gain);
		} else {
			scale.disconnect(node.gain);
			$$invalidate(1, node.gain.value = 1, node);
		}
	};

	onMount(() => __awaiter(void 0, void 0, void 0, function* () {
		node.connect(channel);
		$$invalidate(2, channel.mute = true, channel);

		return () => {
			scale.dispose();
		};
	}));

	function volume_value_binding(value) {
		state.volume = value;
		$$invalidate(0, state);
	}

	$$self.$$set = $$props => {
		if ("state" in $$props) $$invalidate(0, state = $$props.state);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*state*/ 1) {
			 $$invalidate(2, channel.volume.value = state.volume, channel);
		}
	};

	return [state, node, channel, MIN, scale, onConnect, volume_value_binding];
}

class VOL extends __sv.SvelteComponent {
	constructor(options) {
		super();
		__sv.init(this, options, instance, create_fragment, __sv.safe_not_equal, { state: 0 });
	}
}

export default VOL;