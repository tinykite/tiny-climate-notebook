import LineChart from '$components/LineChart/LineChart.svelte'
import weatherData from '$data/data-minnesotaAverageTemp.json'

export default {
  component: LineChart,
  title: 'Line Chart',
};

export const Weather = {
  args: {
    data: weatherData,
  },
};