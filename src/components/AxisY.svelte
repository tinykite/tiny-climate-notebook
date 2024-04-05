<script lang="ts">
  export let width: number;
  export let yScale: (tick: number) => number;

  let yTicks = yScale.ticks(4);
  let id = crypto.randomUUID();
</script>

<span {id}>Y axis values ranging from {yTicks[0]} to {yTicks.length}</span>
<g aria-labelledby={id} class="axis y">
  {#each yTicks as tick, index}
    <g class="tick" transform="translate(0, {yScale(tick)})">
      <line
        x1={0}
        x2={width}
        y1={0}
        y2={0}
        stroke={index === 0 ? "#8f8f8f" : "#e5e7eb"}
      />
      <text y={-3}
        >{index === yTicks.length - 1 ? `${tick} hours studied` : tick}</text
      >
    </g>
  {/each}
</g>

<style>
  .tick text {
    font-weight: 400; /* How thick our text is */
    font-size: 12px; /* How big our text is */
    fill: hsla(212, 10%, 53%, 1); /* The color of our text */
  }
</style>
