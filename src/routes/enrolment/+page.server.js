import client from '$lib/client'

export async function load({ params }) {
  const content = await client.fetch(`
    {
      'header': *[_id == 'enrolmentHeader'][0]{
        title,
        subheading,
        intro
      },
      'domestic': *[_id == 'domesticSection'][0]{
        title,
        text,
        images,
        "order": 1,
      },
      'international': *[_id == 'internationalSection'][0]{
        title,
        text,
        images,
        "order": 2,
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
