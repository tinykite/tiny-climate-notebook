<script>
    import { LayerCake, ScaledSvg, Html } from 'layercake';
  
    import Line from './Line.svelte';
    import Area from './Area.svelte';
    import AxisX from '$components/Axis/AxisX.percent-range.html.svelte';
    import AxisY from '$components/Axis/AxisY.percent-range.html.svelte';
  
    // In your local project, you will more likely be loading this as a csv and converting it to json using @rollup/plugin-dsv
    import data from '$data/line-points.js';
  
    const xKey = 'myX';
    const yKey = 'myY';
  
    data.forEach(d => {
      d[yKey] = +d[yKey];
    });
  </script>
  
  <style>
    /*
      The wrapper div needs to have an explicit width and height in CSS.
      It can also be a flexbox child or CSS grid element.
      The point being it needs dimensions since the <LayerCake> element will
      expand to fill it.
    */
    .chart-container {
      width: 100%;
      height: 250px;
    }
  </style>
  
  <div class="chart-container">
    <LayerCake
      ssr
      percentRange
      padding={{ top: 8, right: 10, bottom: 20, left: 25 }}
      x={xKey}
      y={d => d[yKey]}
      yDomain={[0, null]}
      {data}
    >
      <Html>
        <AxisX/>
        <AxisY
          ticks={4}
        />
      </Html>
      <ScaledSvg>
        <Line/>
        <Area/>
      </ScaledSvg>
    </LayerCake>
  </div>