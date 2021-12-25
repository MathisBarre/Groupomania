import { sleep } from "@/utils/usefullFunctions";

export async function connectUser(payload) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/auth/login`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(payload),
    headers: {
      'Content-type': 'application/json'
    }
  })

  if (!response.ok) {
    const errorDetails = await response.json()
    throw new Error(`${response.status} ${response.statusText} (${response.type}) : ${errorDetails.message}`);
  }

  return await response.json()
}

export async function connectDemoUser(payload) {
  await sleep(500)

  if (payload.email === "demo@mail.com" && payload.password === "aA123456789") {
    return { email: payload.email }
  } else {
    throw new Error("Mauvaise adresse e-mail ou mot de passe")
  }
}