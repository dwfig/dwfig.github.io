
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { Faceplate, onMount, Patch, scale } from '/js/core.js';

/* src/SCOPE.svelte generated by Svelte v3.31.2 */

function add_css() {
	var style = __sv.element("style");
	style.id = "svelte-hejow9-style";
	style.textContent = "canvas.svelte-hejow9{background:#232d30;position:absolute;left:15px;top:60px;width:160px;height:180px}";
	__sv.append(document.head, style);
}

// (64:0) <Faceplate title="SCOPE" color="var(--color-3)">
function create_default_slot(ctx) {
	let canvas_1;
	let t;
	let patch;
	let current;

	patch = new Patch({
			props: {
				label: "in",
				x: 84,
				y: 325,
				name: "audio-1",
				input: /*node*/ ctx[1],
				onConnect: /*onConnect*/ ctx[2]
			}
		});

	return {
		c() {
			canvas_1 = __sv.element("canvas");
			t = __sv.space();
			__sv.create_component(patch.$$.fragment);
			__sv.attr(canvas_1, "class", "svelte-hejow9");
		},
		m(target, anchor) {
			__sv.insert(target, canvas_1, anchor);
			/*canvas_1_binding*/ ctx[3](canvas_1);
			__sv.insert(target, t, anchor);
			__sv.mount_component(patch, target, anchor);
			current = true;
		},
		p: __sv.noop,
		i(local) {
			if (current) return;
			__sv.transition_in(patch.$$.fragment, local);
			current = true;
		},
		o(local) {
			__sv.transition_out(patch.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) __sv.detach(canvas_1);
			/*canvas_1_binding*/ ctx[3](null);
			if (detaching) __sv.detach(t);
			__sv.destroy_component(patch, detaching);
		}
	};
}

function create_fragment(ctx) {
	let faceplate;
	let current;

	faceplate = new Faceplate({
			props: {
				title: "SCOPE",
				color: "var(--color-3)",
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

			if (dirty & /*$$scope, canvas*/ 4097) {
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
	let node = new Tone.Waveform(512);
	let canvas;
	let ctx;
	let draw = false;
	const ratio = window.devicePixelRatio || 1;
	const width = 160 * ratio;
	const height = 180 * ratio;
	const margin = 20 * ratio;

	const loop = () => {
		if (!draw || !ctx) {
			return;
		}

		requestAnimationFrame(loop);
		const wave = node.getValue();
		drawWave(wave);
	};

	const drawWave = wave => {
		ctx.clearRect(0, 0, width, height);
		ctx.beginPath();

		for (let i = 0, len = wave.length; i < len; i++) {
			const x = scale(i, [0, len - 1], [0, width], 0);
			const y = scale(wave[i], [-1, 1], [height - margin, 0 + margin], 0);

			if (i === 0) {
				ctx.moveTo(x, y);
			} else {
				ctx.lineTo(x, y);
			}
		}

		ctx.strokeStyle = "white";
		ctx.lineWidth = 2;
		ctx.stroke();
	};

	const onConnect = nodes => {
		if (nodes) {
			draw = true;
			loop();
		} else {
			draw = false;
		}
	};

	onMount(() => {
		$$invalidate(0, canvas.width = width, canvas);
		$$invalidate(0, canvas.height = height, canvas);
		ctx = canvas.getContext("2d");
	});

	function canvas_1_binding($$value) {
		__sv.binding_callbacks[$$value ? "unshift" : "push"](() => {
			canvas = $$value;
			$$invalidate(0, canvas);
		});
	}

	return [canvas, node, onConnect, canvas_1_binding];
}

class SCOPE extends __sv.SvelteComponent {
	constructor(options) {
		super();
		if (!document.getElementById("svelte-hejow9-style")) add_css();
		__sv.init(this, options, instance, create_fragment, __sv.safe_not_equal, {});
	}
}

export default SCOPE;
