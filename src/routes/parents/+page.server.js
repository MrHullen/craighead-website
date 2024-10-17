import client from '$lib/client'

export async function load({ params }) {
  const links = await client.fetch(`
    *[_type == 'navBar'][0].menuItems[title == 'Parents'].dropdown[0]
  `)

  if (links) {
    return {
      links,
    }
  }

  return {
    status: 500,
    body: new Error('Internal Server Error'),
  }
}
