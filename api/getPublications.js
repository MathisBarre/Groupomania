export default async function getPublication() {
  const httpBodyResponse = await fetch("http://localhost:3001/publications")
  const publications = await httpBodyResponse.json() 
  return publications
}