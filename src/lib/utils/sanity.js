import client from '$lib/client'
// import groq from 'groq'


export async function getNewletters(){
  console.log("Fetching...")
	return await client.fetch(`
    {
      'newsletters': *[_type == "newsletter"] | order(releaseDate desc)
    }
  `)
}

export async function getArticle(slug) {
	// return await client.fetch(groq`*[_type == "article" && slug.current == $slug][0]`, {
	// 	slug
	// })
}