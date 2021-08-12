export default async function connectUser() {
  await fetch("http://localhost:3001/auth/login", {
    credentials: "include"
  })
}