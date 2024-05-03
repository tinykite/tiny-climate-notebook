export type Categories = 'sveltekit' | 'svelte'

export type Post = {
	title: string
	slug: string
	description: string
	date: string
	categories: Categories[]
	published: boolean
	chartData?: []
	chartDataType: string
}

export const chartTypes = {
	line: 'line',
} as const;
  
export type ChartType = typeof chartTypes[keyof typeof chartTypes];