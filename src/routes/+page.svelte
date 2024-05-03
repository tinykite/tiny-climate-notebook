<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'
  import Chart from '$components/Chart/Chart.svelte';

	export let data
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
        <Chart data={post.chartData} type={post.chartDataType} />
			</li>
		{/each}
	</ul>
</section>
  
  <style>
    :root {
      padding: 1.6em 2em 4em;
      letter-spacing: -0.011em;
      font-size: 16px;
      color: #34495e;
      background: #f1f3f5;
    }
  </style>
  