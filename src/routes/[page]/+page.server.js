import client from '$lib/client'

export async function load({ params }) {
  const page = await client.fetch(`*[_type == 'page' && slug.current == '${params.page}'][0]`)

  if (page) return { page }

  return {
    status: 500,
    body: new Error('Internal Server Error'),
  }
}
