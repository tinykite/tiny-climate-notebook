<script>
    import { LayerCake, Svg } from 'layercake';
    import { scaleBand } from 'd3-scale';
  
    import Bar from './Bar.svelte';
    import AxisX from '$components/Axis/AxisX.svg.svelte';
    import AxisY from '$components/Axis/AxisY.svg.svelte';
  
    // In your local project, you will more likely be loading this as a csv and converting it to json using @rollup/plugin-dsv
    import { data } from '$data/bar-groups';
  
        
    const xKey = 'value';
    const yKey = 'year';
  
    data.forEach(d => {
      d[xKey] = +d[xKey];
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
      padding={{ bottom: 20, left: 35 }}
      x={xKey}
      y={yKey}
      yScale={scaleBand().paddingInner(0.05)}
      xDomain={[0, null]}
      {data}
    >
      <Svg>
        <AxisX
          tickMarks
          baseline
          snapLabels
        />
        <AxisY
          tickMarks={false}
          gridlines={false}
          labelPosition='even'
        />
        <BarPudding/>
      </Svg>
    </LayerCake>
  </div>