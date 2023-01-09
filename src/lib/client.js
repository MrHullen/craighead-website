import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: 'svq88qt7',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: false
})

export default client