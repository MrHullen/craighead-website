import client from '$lib/client'

export async function load({ params }) {
  const content = await client.fetch(`
  {
    'landingVideo': *[_id == "video"][0]{
      "playbackId": video.asset->playbackId
    },
    'tileImages': *[_id == "tileImages"][0],
  }
  `)

  if (content) return { ...content }

  return {
    status: 500,
    body: new Error('Internal Server Error'),
  }
}
