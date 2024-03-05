import client from '$lib/client'

export async function load({ params }) {
  const assets = await client.fetch(`
    *[_id == 'general'][0]{
      favIcon,
      logo,
      'application': application.asset->url
    }
  `)

  if (assets) {
    return {
      assets: assets,
    }
  }

  return {
    status: 500,
    body: new Error('Internal Server Error'),
  }
}
