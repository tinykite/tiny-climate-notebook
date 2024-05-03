<script>
    import * as d3 from 'd3'

    let data = $state();
    let { chart, data: dataSource, children } = $props(); 

    async function fetchData() {
        try {
         const res = await d3.csv(`/data/${dataSource}`)
        }
        catch (err) {
            console.log(err)
        }
    }
    fetchData()
   
</script>

{@render children()}
