import useSWR from "swr"
import fetcher from "@/api/fetcher"
import Post from "@/components/Post"

export default function Feed() {
  const { data, error } = useSWR("http://localhost:3001/publications", fetcher)

  console.log(data)
  if (data) {
    return (
      <div className="py-10">
        <div className="max-w-3xl mx-auto sm:px-6">
          <main className="">
            <h1 className="sr-only">posts</h1>
            <ul className="space-y-4">
              {data.map((post) => (
                <Post key={post.id} post={post} />
              ))}
            </ul>
          </main>
        </div>
      </div>
    )
  } else if(error) {
    return (
      <p>error</p>
    )
  } else {
    return (
      <p>loading...</p>
    )
  }
}