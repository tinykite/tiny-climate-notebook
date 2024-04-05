<script lang="ts">
  import { fly } from "svelte/transition";
  import AxisX from "./AxisX.svelte";
  import AxisY from "./AxisY.svelte";
  import Tooltip from "./Tooltip.svelte";

  import { scaleLinear } from "d3-scale";
  import { max } from "d3-array";
  type T = $$Generic;

  export let data: Array<any>;
  export let xAccessor: string;
  export let yAccessor: string;

  let width = 400,
    height = 400;

  const margin = { top: 20, right: 15, bottom: 20, left: 0 };
  const radius = 10;

  $: innerWidth = width - margin.left - margin.right;
  let innerHeight = height - margin.top - margin.bottom;

  $: xScale = scaleLinear().domain([0, 100]).range([0, innerWidth]);

  let yScale = scaleLinear()
    .domain([0, max(data, (d) => d[yAccessor])])
    .range([innerHeight, 0]);

  let hoveredData: T | null;

  let sortedData = data.sort((a, b) => a[xAccessor] - b[xAccessor]);
</script>

<div class="chart-container" bind:clientWidth={width}>
  <!-- Not sure role is correct -->
  <svg
    {width}
    {height}
    on:mouseleave={() => (hoveredData = null)}
    role="region"
  >
    <g class="inner-chart" transform="translate({margin.left}, {margin.top})">
      <AxisY width={innerWidth} {yScale} />
      <AxisX height={innerHeight} width={innerWidth} {xScale} />
      {#each sortedData as d}
        <!-- Not sure role is correct -->
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <circle
          role="tooltip"
          in:fly={{ x: -10, opacity: 0, duration: 500 }}
          cx={xScale(d[xAccessor])}
          cy={yScale(d[yAccessor])}
          fill="purple"
          stroke="black"
          r={hoveredData == d ? radius * 2 : radius}
          opacity={hoveredData ? (hoveredData == d ? 1 : 0.45) : 0.85}
          on:mouseover={() => (hoveredData = d)}
          on:focus={() => (hoveredData = d)}
          tabindex="0"
        />
      {/each}
    </g>
  </svg>
  {#if hoveredData}
    <div aria-live={"polite"}>
      <Tooltip {xScale} {yScale} {width} data={hoveredData} />
    </div>
  {/if}
</div>

<style>
  .chart-container {
    position: relative;
  }

  circle {
    transition: r 300ms ease, opacity 500ms ease;
    cursor: pointer;
  }
</style>
