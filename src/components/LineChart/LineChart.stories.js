import LineChart from '$components/LineChart/LineChartExample.svelte'
import weatherData from '$data/minnesotaAverageTemp.json';

export default {
  component: LineChart,
  title: 'Line Chart',
};

export const Weather = {
  args: {
    data: weatherData,
  },
};