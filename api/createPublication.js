export default async function createPublication(title, gifUrl) {
  await fetch("http://localhost:3001/publication", {
    method: "POST",
    body: JSON.stringify({
      title,
      imageUrl: gifUrl,
      authorId: 2
    }),
    headers: {
      'Content-type': 'application/json'
    }
  })
}