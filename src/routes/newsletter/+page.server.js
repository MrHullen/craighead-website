import getNewsletters from '$lib/utils/sanity'
import client from '$lib/client'


export async function load({ params }) {
  const newsletters = await client.fetch(`*[_type == "newsletter"] | order(releaseDate desc)`)

	if (newsletters) {
		return {
			newsletters
		}
	}

  return {
    status: 500,
    body: new Error('Internal Server Error'),
  }
}
