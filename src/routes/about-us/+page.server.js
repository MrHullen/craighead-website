import client from '$lib/client'

export async function load({ params }) {
  const content = await client.fetch(`
    {
      'header': *[_id == 'aboutUsHeader'][0]{
        title,
        subheading,
        intro
      },
      'specialCharacter': *[_id == 'specialCharacterSection'][0]{
        title,
        subheading,
        text
      },
      'boarding': *[_id == 'boardingSection'][0]{
        title,
        subheading,
        text
      },
      'girls': *[_id == 'girlsSection'][0]{
        title,
        subheading,
        text
      },
      'oldGirls': *[_id == 'oldGirlsSection'][0]{
        title,
        subheading,
        text
      },
      'history': *[_id == 'historySection'][0]{
        title,
        subheading,
        text
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