export default async function disconnectUser() {
  const response = await fetch("http://localhost:3001/auth/logout", {
    method: "POST",
    credentials: "include"
  })

  if (!response.ok) throw new Error(`${response.status} ${response.statusText} (${response.type})`)
}