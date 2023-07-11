import client from '$lib/client'

export async function load({ params }) {
  // const data = await client.fetch(
	// 	groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`
	// )

  const data = [
    {
      "mainImage": "Main Image",
      "title": "Title",
      "slug": "Slug",
      "slug.current": "slug.current",
      "excerpt": "Excerpt",
      "_createdAt": "Created at",
      "body": "Body text"
    }
  ]

	if (data) {
		return {
			data
		}
	}

  return {
    status: 500,
    body: new Error('Internal Server Error'),
  }
}
