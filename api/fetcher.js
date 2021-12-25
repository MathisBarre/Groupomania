export default async function fetcher(url) {
  console.log(url)
  if (process.env.NEXT_PUBLIC_DEMO_MODE) url = url + ".json"

  const response = await fetch(url, {
    credentials: "include"
  })

  if (!response.ok) {
    const errorDetails = await response.json()
    throw new Error(`${response.status} ${response.statusText} (${response.type}) : ${errorDetails.message}`);
  }

  const json = await response.json() 
  return json
}