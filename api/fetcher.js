export default async function fetcher(url) {
  const httpBodyResponse = await fetch(url, {
    credentials: "include"
  })
  const json = await httpBodyResponse.json() 
  return json
}