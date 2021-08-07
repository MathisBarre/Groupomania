import getPublication from "@/api/getPublications"
import Post from "@/components/Post"

export default function Feed({ publications }) {
  console.log(publications)
  return (
    <div className="py-10">
      <div className="max-w-3xl mx-auto sm:px-6">
        <main className="">
          <h1 className="sr-only">posts</h1>
          <ul className="space-y-4">
            {publications.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </ul>
        </main>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const data = await getPublication()

  return { 
    props : { 
      publications : data
    }
  }
}