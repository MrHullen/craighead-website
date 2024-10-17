import client from '$lib/client'

export async function load({ params }) {
  const content = await client.fetch(`
  {
    'landingVideo': *[_id == "video"][0]{
      "playbackId": video.asset->playbackId
    },
    'tiles': *[title == 'Landing Page Tiles'][0].tiles,
  }
  `)

  if (content) return { ...content }

  return {
    status: 500,
    body: new Error('Internal Server Error'),
  }
}
