import client from '$lib/client'

export async function load({ params }) {
	const article = await client.fetch(`*[_type == "newsletter" && releaseDate == '${params.date}'][0].articles[slug.current == '${params.article}']`)

	if (article) return { article }

	return {
    status: 500,
    body: new Error('Internal Server Error'),
  }
}
