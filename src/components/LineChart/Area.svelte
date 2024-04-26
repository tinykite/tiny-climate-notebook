<script>
	import { getContext } from "svelte";
	import { area, curveLinear } from "d3";

	const { data, xGet, yGet, yScale } = getContext("LayerCake");

    export let fill = '#ab00d610';
	export let curve = curveLinear;

	$: path = area()
		.x($xGet)
		.y1($yGet)
		.y0((d) => $yScale(0))
		.curve(curve);
</script>

<path d={path($data)} {fill} />

