export default async function createUser(publicationId, comment) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/comment`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify({
      publicationId: publicationId,
      comment: comment
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })

  if (!response.ok) {
    const errorDetails = await response.json()
    throw new Error(`${response.status} ${response.statusText} (${response.type}) : ${errorDetails.message}`);
  }

  return response.json()
}