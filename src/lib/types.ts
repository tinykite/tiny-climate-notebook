export type Categories = 'sveltekit' | 'svelte'

export type Post = {
	title: string
	slug: string
	description: string
	date: string
	categories: Categories[]
	published: boolean
	chartData: []
	chartType: ChartType
	chartDataType: ChartDataType
}

export const chartTypes = {
	line: 'line',
} as const;

export const chartDataTypes = {
	json: 'json',
} as const;
  
export type ChartDataType = typeof chartDataTypes[keyof typeof chartDataTypes];
export type ChartType = typeof chartTypes[keyof typeof chartTypes];