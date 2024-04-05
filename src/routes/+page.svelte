<script lang="ts">
  import * as d3 from "d3";
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'

	export let data

    // import { getTimelineData, getScatterData } from "./utils/dummyData";
    // import Timeline from "./Timeline.svelte";
    // import ScatterPlot from "./ScatterPlot.svelte";
    // import Histogram from "./Histogram.svelte";
    // import Timeline from "./components/Timeline.svelte";
    // import ScatterPlot from "./components/ScatterPlot.svelte";
    // import Histogram from "./components/Histogram.svelte";
  
    // const parseDate = d3.timeParse("%m/%d/%Y");
    // const dateAccessor = d => parseDate(d.date);
    // const temperatureAccessor = d => d.temperature;
    // const humidityAccessor = d => d.humidity;
  
    // const getData = () => ({
    //   timeline: getTimelineData(),
    //   scatter: getScatterData()
    // });
  
    // let updatedData = getData();
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<!-- Posts -->
<section>
	<ul class="posts">
		{#each data.posts as post}
			<li class="post">
				<a href={post.slug} class="title">{post.title}</a>
				<p class="date">{formatDate(post.date)}</p>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>
  
  <main>
    <div class="App">
      <h1>Weather Dashboard</h1>
      <div class="App__charts"></div>
  </main>
  
  <style>
    @font-face {
      font-family: "Inter";
      src: url("/Inter.var.woff2");
    }
  
    :root {
      padding: 1.6em 2em 4em;
      letter-spacing: -0.011em;
      font-family: "Inter", sans-serif;
      font-size: 16px;
      color: #34495e;
      background: #f1f3f5;
    }
  
    .App {
      width: 100%;
    }
  
    h1 {
      font-weight: 900;
      margin: 0.4em 0 0.6em;
    }
  
    /* placeholders */
    :global(.placeholder) {
      background: #ecf0f1;
    }
  
    .App__charts {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      margin: -0.5em;
    }
  
    :global(.Timeline),
    :global(.ScatterPlot),
    :global(.Histogram) {
      background: white;
      padding: 0.6em 1em;
      margin: 0.5em;
    }
  </style>
  