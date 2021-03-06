
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { Faceplate, onMount, Volume, Switch, Patch, isShortcut } from '/js/core.js';

/* src/OUT.svelte generated by Svelte v3.31.2 */

function create_default_slot(ctx) {
	let volume_1;
	let updating_value;
	let t0;
	let button;
	let t2;
	let switch_1;
	let updating_value_1;
	let t3;
	let patch0;
	let t4;
	let patch1;
	let current;
	let mounted;
	let dispose;

	function volume_1_value_binding(value) {
		/*volume_1_value_binding*/ ctx[8].call(null, value);
	}

	let volume_1_props = {
		x: 24,
		y: 60,
		h: 204,
		min: /*MIN*/ ctx[3],
		max: MAX
	};

	if (/*volume*/ ctx[0] !== void 0) {
		volume_1_props.value = /*volume*/ ctx[0];
	}

	volume_1 = new Volume({ props: volume_1_props });
	__sv.binding_callbacks.push(() => __sv.bind(volume_1, "value", volume_1_value_binding));

	function switch_1_value_binding(value) {
		/*switch_1_value_binding*/ ctx[9].call(null, value);
	}

	let switch_1_props = { x: 40, y: 280, label: "on" };

	if (/*on*/ ctx[1] !== void 0) {
		switch_1_props.value = /*on*/ ctx[1];
	}

	switch_1 = new Switch({ props: switch_1_props });
	__sv.binding_callbacks.push(() => __sv.bind(switch_1, "value", switch_1_value_binding));

	patch0 = new Patch({
			props: {
				label: "cv",
				x: 20,
				y: 320,
				name: "cv-1",
				input: /*scale*/ ctx[4],
				onConnect: /*onConnect*/ ctx[5]
			}
		});

	patch1 = new Patch({
			props: {
				label: "in",
				x: 60,
				y: 320,
				name: "audio-in",
				input: /*node*/ ctx[2]
			}
		});

	return {
		c() {
			__sv.create_component(volume_1.$$.fragment);
			t0 = __sv.space();
			button = __sv.element("button");
			button.textContent = "dbg";
			t2 = __sv.space();
			__sv.create_component(switch_1.$$.fragment);
			t3 = __sv.space();
			__sv.create_component(patch0.$$.fragment);
			t4 = __sv.space();
			__sv.create_component(patch1.$$.fragment);
			__sv.set_style(button, "color", "#111");
			__sv.set_style(button, "background-color", "#0fa");
			__sv.set_style(button, "border-radius", "20px");
		},
		m(target, anchor) {
			__sv.mount_component(volume_1, target, anchor);
			__sv.insert(target, t0, anchor);
			__sv.insert(target, button, anchor);
			__sv.insert(target, t2, anchor);
			__sv.mount_component(switch_1, target, anchor);
			__sv.insert(target, t3, anchor);
			__sv.mount_component(patch0, target, anchor);
			__sv.insert(target, t4, anchor);
			__sv.mount_component(patch1, target, anchor);
			current = true;

			if (!mounted) {
				dispose = __sv.listen(button, "click", /*test*/ ctx[7]);
				mounted = true;
			}
		},
		p(ctx, dirty) {
			const volume_1_changes = {};

			if (!updating_value && dirty & /*volume*/ 1) {
				updating_value = true;
				volume_1_changes.value = /*volume*/ ctx[0];
				__sv.add_flush_callback(() => updating_value = false);
			}

			volume_1.$set(volume_1_changes);
			const switch_1_changes = {};

			if (!updating_value_1 && dirty & /*on*/ 2) {
				updating_value_1 = true;
				switch_1_changes.value = /*on*/ ctx[1];
				__sv.add_flush_callback(() => updating_value_1 = false);
			}

			switch_1.$set(switch_1_changes);
			const patch1_changes = {};
			if (dirty & /*node*/ 4) patch1_changes.input = /*node*/ ctx[2];
			patch1.$set(patch1_changes);
		},
		i(local) {
			if (current) return;
			__sv.transition_in(volume_1.$$.fragment, local);
			__sv.transition_in(switch_1.$$.fragment, local);
			__sv.transition_in(patch0.$$.fragment, local);
			__sv.transition_in(patch1.$$.fragment, local);
			current = true;
		},
		o(local) {
			__sv.transition_out(volume_1.$$.fragment, local);
			__sv.transition_out(switch_1.$$.fragment, local);
			__sv.transition_out(patch0.$$.fragment, local);
			__sv.transition_out(patch1.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			__sv.destroy_component(volume_1, detaching);
			if (detaching) __sv.detach(t0);
			if (detaching) __sv.detach(button);
			if (detaching) __sv.detach(t2);
			__sv.destroy_component(switch_1, detaching);
			if (detaching) __sv.detach(t3);
			__sv.destroy_component(patch0, detaching);
			if (detaching) __sv.detach(t4);
			__sv.destroy_component(patch1, detaching);
			mounted = false;
			dispose();
		}
	};
}

function create_fragment(ctx) {
	let t;
	let faceplate;
	let current;
	let mounted;
	let dispose;

	faceplate = new Faceplate({
			props: {
				title: "OUT",
				color: "var(--color-dark)",
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			t = __sv.space();
			__sv.create_component(faceplate.$$.fragment);
		},
		m(target, anchor) {
			__sv.insert(target, t, anchor);
			__sv.mount_component(faceplate, target, anchor);
			current = true;

			if (!mounted) {
				dispose = __sv.listen(document.body, "keydown", /*onKey*/ ctx[6]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			const faceplate_changes = {};

			if (dirty & /*$$scope, node, on, volume*/ 8199) {
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
			if (detaching) __sv.detach(t);
			__sv.destroy_component(faceplate, detaching);
			mounted = false;
			dispose();
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
	let volume = MIN;
	let on = false;
	const node = new Tone.Gain();
	const channel = new Tone.Channel(volume).toDestination();
	const scale = new Tone.Scale(0, 1);

	const toggleTone = on => __awaiter(void 0, void 0, void 0, function* () {
		if (on) {
			yield Tone.start();
		}

		channel.mute = !on;
	});

	const onConnect = nodes => {
		if (nodes) {
			scale.connect(node.gain);
		} else {
			scale.disconnect(node.gain);
			$$invalidate(2, node.gain.value = 1, node);
		}
	};

	const onKey = e => {
		if (isShortcut(e) && e.key === "Enter") {
			$$invalidate(1, on = !on);
		}
	};

	onMount(() => __awaiter(void 0, void 0, void 0, function* () {
		node.connect(channel);
		channel.mute = true;

		return () => {
			channel.dispose();
		};
	}));

	const test = e => {
		console.log(node.gain);
	}; // console.log(scale.output.value)

	function volume_1_value_binding(value) {
		volume = value;
		$$invalidate(0, volume);
	}

	function switch_1_value_binding(value) {
		on = value;
		$$invalidate(1, on);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*on, volume*/ 3) {
			 if (on) {
				channel.volume.value = volume;
			}
		}

		if ($$self.$$.dirty & /*on*/ 2) {
			 toggleTone(on);
		}
	};

	return [
		volume,
		on,
		node,
		MIN,
		scale,
		onConnect,
		onKey,
		test,
		volume_1_value_binding,
		switch_1_value_binding
	];
}

class OUT extends __sv.SvelteComponent {
	constructor(options) {
		super();
		__sv.init(this, options, instance, create_fragment, __sv.safe_not_equal, {});
	}
}

export default OUT;
