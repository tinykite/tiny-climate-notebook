<script lang="ts">
  import type { ChartType } from "$lib/types";
  import LineChart from "$components/LineChart/LineChartExample.svelte" 
  export let type: ChartType
  export let data: []
</script>

{#if type === 'line'}
  <LineChart data={data} />
{/if}