export default async function updateOnePublication(title, gifUrl, authorId, publicationId) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/publications`, {
    method: "PATCH",
    credentials: "include",
    body: JSON.stringify({
      title: title,
      imageUrl: gifUrl,
      authorId: authorId,
      publicationId: publicationId
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