export default async function connectUser(payload) {
  const response = await fetch("http://localhost:3001/auth/login", {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(payload),
    headers: {
      'Content-type': 'application/json'
    }
  })
  const errorDetails = await response.json()
  console.log(errorDetails)
  if (!response.ok) throw new Error(`${response.status} ${response.statusText} (${response.type}) : ${errorDetails.message}`);
}