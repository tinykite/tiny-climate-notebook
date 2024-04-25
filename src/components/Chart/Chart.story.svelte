<script>
    export let Hst
    import Chart from './Chart.svelte'
    const dimensions = {
        width: "500px",
        height: "500px",
        marginLeft: "10px",
        marginTop: "10px"
    }
  </script>
  
  <Hst.Story title="Chart"  >
    <Hst.Variant title="Square" dimensions={dimensions}>
        <Chart />
    </Hst.Variant>  
  </Hst.Story>