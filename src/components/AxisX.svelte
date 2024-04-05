<script lang="ts">
  export let height: number;
  export let width: number;
  export let xScale: (tick: number) => number;

  let xTicks = [0, 25, 50, 75, 100];
  let id = crypto.randomUUID();
</script>

<span {id}
  >X axis values ranging from {xTicks[0]} to {xTicks[xTicks.length - 1]}</span
>
<g aria-labelledby={id} class="axis x" transform="translate(0, {height})">
  {#each xTicks as tick, index}
    <g class="tick" transform="translate({xScale(tick)}, 0)">
      <line x1={0} x2={0} y1={0} y2={6} stroke="hsla(212, 10%, 53%, 1)" />
      <text
        y={6}
        dy={9}
        text-anchor={index === 0 ? "start" : "middle"}
        dominant-baseline="middle">{tick}%</text
      >
    </g>
  {/each}
  <text class="axis-title" y={-9} x={width} text-anchor="end"
    >Final Grade &rarr;</text
  >
</g>

<style>
  .tick text,
  .axis-title {
    font-weight: 400; /* How thick our text is */
    font-size: 12px; /* How big our text is */
    fill: hsla(212, 10%, 53%, 1); /* The color of our text */
  }
</style>
