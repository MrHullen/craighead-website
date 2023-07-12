import client from '$lib/client'

export async function load({ params }) {
	const newsletter = await client.fetch(`*[_type == "newsletter" && releaseDate == '${params.date}'][0]`)

	if (newsletter) return { newsletter }

	return {
    status: 500,
    body: new Error('Internal Server Error'),
  }
}
