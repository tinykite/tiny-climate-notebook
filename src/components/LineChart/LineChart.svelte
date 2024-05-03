<script>
    import { Html, LayerCake, ScaledSvg } from 'layercake';
  
    import AxisX from '$components/Axis/AxisX.percent-range.html.svelte';
    import AxisY from '$components/Axis/AxisY.percent-range.html.svelte';
    import Line from './Line.svelte';
  
    const yKey = 'temp';
    const xKey = 'year';

    export let data
  
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
        <AxisX ticks={10} tickGutter={5} snapLabels />
        <AxisY
          ticks={4}
          format={d=>`${d}° F`}
          snapBaselineLabel
        />
      </Html>
      <ScaledSvg>
        <Line/>
      </ScaledSvg>
    </LayerCake>
  </div>