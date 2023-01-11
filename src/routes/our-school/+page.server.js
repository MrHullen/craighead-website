import client from '$lib/client'

export async function load({ params }) {
  const content = await client.fetch(`
    {
      'header': *[_id == 'ourSchoolHeader'][0]{
        title,
        subheading,
        intro
      },
      'academicPerformance': *[_id == 'academicPerformanceSection'][0]{
        title,
        text,
        images
      },
      'learningSupport': *[_id == 'learningSupportSection'][0]{
        title,
        text,
        images
      },
      'schoolStructure': *[_id == 'schoolStructureSection'][0]{
        title,
        text,
        images
      },
      'sporting': *[_id == 'sportingSection'][0]{
        title,
        text,
        images
      },
      'cultural': *[_id == 'culturalSection'][0]{
        title,
        text,
        images
      },
      'facilities': *[_id == 'facilitiesHireSection'][0]{
        title,
        text,
        images
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
