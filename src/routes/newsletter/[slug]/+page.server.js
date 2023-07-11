import client from '$lib/client'

export async function load({ params }) {
	const data = await client.fetch(groq`*[_type == "post" && slug.current == $slug][0]`, {
    slug
  })

	if (data) return data

	return {
    status: 500,
    body: new Error('Internal Server Error'),
  }
}
