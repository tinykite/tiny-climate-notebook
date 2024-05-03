import { error } from '@sveltejs/kit'

export async function load({ params }) {
	try {
		const post = await import(`../../posts/${params.slug}.md`)
		let chartData
		
		if (post?.metadata?.chartDataType === 'json') {			
			const data = await import(`../../data/data-${post.metadata.chartData}.json`);
			chartData = data.default
		}
		return {
			content: post.default,
			meta: post.metadata,
			chartData
		}
	} catch (e) {
		error(404, `Could not find ${params.slug}`)
	}
}