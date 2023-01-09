import client from '$lib/client'

export async function load({ params }) {
  const content = await client.fetch(`
    {
      'studentWelcome': *[_id == 'studentWelcome'][0]{
        blurb,
        "imageUrl": image.asset->url,
        "imageAlt": image.alt,
        "imageCaption": image.caption
      },
      'principalsWelcome': *[_id == 'principalsWelcome'][0]{
        quote,
        principal,
        "imageUrl": image.asset->url,
        "imageAlt": image.alt,
      },
      'studentSpotlights': *[_id == 'studentSpotlights'][0]{
        studentSpotlights[]{
          'imageUrl': asset->url,
          "imageAlt": alt,
          "imageCaption": caption
        }
      }
    }
  `)

  if (content) {
    return {
      content: content
    }
  }

  return {
    status: 500,
    body: new Error("Internal Server Error")
  }
}