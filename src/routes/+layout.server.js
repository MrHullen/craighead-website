import client from '$lib/client'

export async function load({ params }) {
  const assets = await client.fetch(`
    {
      'general': *[_id == 'general'][0],      
      'navBar': *[_type == 'navBar'][0],
      'footer': {
        'address': *[_id == 'address'][0],
        'usefulLinks': *[_id == 'usefulLinks'][0],
      },
    }
  `)

  if (assets) {
    return {
      assets,
    }
  }

  return {
    status: 500,
    body: new Error('Internal Server Error'),
  }
}
