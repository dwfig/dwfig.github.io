<script lang="ts">
  import { Player, Context, Oscillator, Scale, CrossFade, ToneAudioBuffer } from 'Tone';
  import type { ToneOscillatorType } from 'Tone';
  import { Patch, Knob, Switch, onMount } from '@patchcab/core';
  import Faceplate from '../../core/src/components/Faceplate.svelte'
  import Light from '../../core/src/components/Light.svelte';
  console.log('../../src/itea_bg.svg')

  // TODO : 
  // [ ] Fix FM modulation...
  // [x] Pull 2 month sample
  // [ ] Allow Start to move from 0 to max minus length
  // [ ] Allow length to move from 745 to max (44000 something)
  // 
  // [ ] Scale from its min max to  ( -1 / +1 )
  // 
  // [ ] Let Knob take an SVG
  // [x] Let Faceplate take an SVG
  // 
  // [ ] CORS from gh-pages site?
  // [ ] Use built-in JSON file if fetch fails

  const MIN = 0.00;
  const MAX = 1.00;

  export let state = {
    freq: 440,
    type: 'sine' as ToneOscillatorType,
    fm: 1,
    trimix: 0.5,
    fetched: false,
    data: null,
    hue: '#ffc75e',
    rate: 1.00,
    milli: 0,
    micro: 0,
  };

  const crossFade = new CrossFade()
  const osc1 = new Oscillator(state.freq, state.type).connect(crossFade.a).start();
  const osc2 = new Oscillator(state.freq, 'sawtooth').connect(crossFade.b).start();
  const scale = new Scale(MIN, MAX);

  // const map = (num, in_min, in_max, out_min, out_max) => {
  //   return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  // }

  let buffer;
  let player = new Player()
  // let player = new Player('https://upload.wikimedia.org/wikipedia/commons/8/80/Field_cricket_Gryllus_pennsylvanicus.ogg')

  onMount(async () => {
    try{
      let corsProxy = `http://localhost:8080/`
      let fetchUrl = `http://www.ioc-sealevelmonitoring.org/service.php?query=data&format=json&code=${'itea'}&includesensors[]=rad&timestop=now&timestart=`
      let today = new Date
      let minute = 60 * 1000
      let tidalperiod = 745 * minute

      let twoweeks = minute * 20160
      let tidemonth = 2 * twoweeks

      let tidemonthago = today - tidemonth
      let tideperiodago = today - tidalperiod
      let y = new Date(tideperiodago)
      let dateQuery = y.toISOString().slice(0,16)  
      
     const res = await fetch(corsProxy + fetchUrl + dateQuery, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await res.json()

      // here we can scale the data
      // tides = [] 
      // for i in data
      // tides[i] = data.slevel
      // then, tides max and tides min
      // for i in tides, map/scale
      // scaled tides 
      // state.data = scaledTides

      state.data = data
      state.fetched = true;
      console.log(state.data)
      state.hue = '#42a4ff'
      buffer = new ToneAudioBuffer().fromArray(new Float32Array(state.data.length))
      for (var channel = 0; channel < buffer.numberOfChannels; channel++) {
        // This gives us the actual array that contains the data
        var nowBuffering = buffer.getChannelData(channel);
        for (var i = 0; i < buffer.length; i++) {
          nowBuffering[i] = state.data[i].slevel
        }
      }
      // player = new Player('https://upload.wikimedia.org/wikipedia/commons/8/80/Field_cricket_Gryllus_pennsylvanicus.ogg')
      player = new Player(buffer)
      // player.load(buffer)
      if (player.loaded){
        player.start()
      } else {
        player.autostart = true
      }
      player.loop = true

      // console.log(buffer)
      // console.log(player.playbackRate)
      // console.log(player.loaded)
      
    } catch (err){
      console.log(err)
      state.hue = '#eb3495'
    }
	})

  // $: osc1.frequency.value = state.freq;
  // $: osc1.frequency.value = state.rate;
  $: player.playbackRate = state.rate + ( state.milli / 1000 ) + ( state.micro / 1000000 );
  $: osc2.frequency.value = state.freq;
  $: osc1.type = state.type;
  $: crossFade.fade.value = state.trimix;

  // $: scale.min = Math.max(MIN, state.freq - state.freq * state.fm);
  // $: scale.max = Math.min(MAX, state.freq + (MAX - state.freq) * state.fm);

  $: scale.min = Math.max(MIN, state.rate - state.rate * state.fm);
  $: scale.max = Math.min(MAX, state.rate + (MAX - state.rate) * state.fm);

  const test = (e) => {
    let milliAdjust = state.milli / 1000
    let microAdjust = state.micro / 1000000
    console.log(state.rate + milliAdjust + microAdjust)
  }

  const onConnect = (nodes: number) => {
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
</script>
<Faceplate title="Itea" color="#563696" image='../assets/itea-bg-1.svg' >
  <Light  x={96} y={56} bind:hue={state.hue} bind:value={state.fetched}  label="web" set="fetched"/>
  
  <Knob label="rate" x={10} y={60} bind:value={state.rate} min={0.000022} max={1} precision={6} />
  
  <Knob size="s" label="milli" x={76} y={100} bind:value={state.milli} min={0} max={100} precision={2} />
  <Knob size="s" label="micro" x={76} y={170} bind:value={state.micro} min={0} max={100} precision={2} />
  <Knob size="s" label="start" x={18} y={218} bind:value={state.fm} min={0} max={1} precision={2} />
  <Knob size="s" label="length" x={18} y={300} bind:value={state.trimix} min={1} max={100} precision={2} />

  <!-- <Switch x={20} y={270} bind:value={state.type} label="sin" set="sine" /> -->
  <button on:click={test} style="color: #111;background-color: #0fa; border-radius: 20px">dbg</button>
  <Patch label="fm" x={24} y={155} name="signal-in" input={scale} {onConnect} />
  <Patch label="out" x={92} y={320} name="audio-out" output={player} />
</Faceplate>
