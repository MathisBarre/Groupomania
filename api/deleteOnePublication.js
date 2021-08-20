export default async function createPublication(publicationId) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/publications/${publicationId}`, {
    method: "DELETE",
    credentials: "include",
  })

  if (!response.ok) {
    const errorDetails = await response.json()
    throw new Error(`${response.status} ${response.statusText} (${response.type}) : ${errorDetails.message}`);
  }

  return response.json()
}