import client from '$lib/client'

export async function load({ params }) {
  const content = await client.fetch(`
    {
      'studentWelcome': *[_id == 'studentWelcome'][0]{
        blurb,
        image
      },
      'principalsWelcome': *[_id == 'principalsWelcome'][0]{
        quote,
        principal,
        image
      },
      'studentSpotlights': *[_id == 'studentSpotlights'][0]{
        studentSpotlights[]
      }
    }
  `)

  if (content) {
    return {
      content: content,
    }
  }

  return {
    status: 500,
    body: new Error('Internal Server Error'),
  }
}
