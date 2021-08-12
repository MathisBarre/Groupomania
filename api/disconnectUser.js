export default async function disconnectUser() {
  const response = await fetch("http://localhost:3001/auth/logout", {
    method: "POST",
    credentials: "include"
  })

  if (!response.ok) {
    const errorDetails = await response.json()
    throw new Error(`${response.status} ${response.statusText} (${response.type}) : ${errorDetails.message}`);
  }
}