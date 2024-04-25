<script>
    import * as d3 from 'd3'

    let data = $state();
    let { chart, data: dataSource, children } = $props(); 

    async function fetchData() {
        try {
         const res = await d3.csv(`/data/${dataSource}`)
         console.log(d3.csv)
        }
        catch (err) {
            console.log(err)
        }
    }

    fetchData()
    // async function fetchData() {
    //   resp.isLoading = true;
    //   try {
    //     const response = await fetch("https://randomuser.me/api/?results=3");
    //     resp.users = (await response.json()).results;
    //     resp.error = undefined;
    //   } catch (err) {
    //     resp.error = err;
    //     resp.users = undefined;
    //   }
    //   resp.isLoading = false;
    // }

//     import type { DSVRowArray } from "d3";

//     onMount(async () => 
//     {
//     const data: DSVRowArray<string> | undefined = await d3.csv(dataSource
//     );

//     if (!data) {
//       throw error(500, "No data found");
//     }

//     console.log(dataset);
//   });
</script>

<!-- <ScatterPlot {data} xAccessor={"grade"} yAccessor={"hours"} /> -->

{@render children()}
