import client from '$lib/client'

export async function load({ params }) {
  const content = await client.fetch(`
    {
      'header': *[_id == 'ourSchoolHeader'][0]{
        title,
        subheading,
        intro
      },
      'schoolStructure': *[_id == 'schoolStructureSection'][0]{
        title,
        text,
        images,
        "order": 1,
      },
      'our-people': *[_id == 'ourPeopleSection'][0]{
        title,
        text,
        images,
        "order": 2,
      },
      'boarding': *[_id == 'boardingSection'][0]{
        title,
        text,
        images,
        "order": 3,
      },
      'learningSupport': *[_id == 'learningSupportSection'][0]{
        title,
        text,
        images,
        "order": 4,
      },
      'sporting': *[_id == 'sportingSection'][0]{
        title,
        text,
        images,
        "order": 5,
      },
      'cultural': *[_id == 'culturalSection'][0]{
        title,
        text,
        images,
        "order": 6,
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
