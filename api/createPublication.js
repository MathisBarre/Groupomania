export default async function createPublication(title, gifUrl) {
  const response = await fetch("http://localhost:3001/publications", {
    method: "POST",
    credentials: "include",
    body: JSON.stringify({
      title,
      imageUrl: gifUrl,
      authorId: 2
    }),
    headers: {
      'Content-type': 'application/json'
    }
  })

  if (!response.ok) {
    const errorDetails = await response.json()
    throw new Error(`${response.status} ${response.statusText} (${response.type}) : ${errorDetails.message}`);
  }

  return response.json()
}