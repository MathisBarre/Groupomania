import Post from "../components/Post"

const posts = [
  {
    id: '81614',
    likes: '29',
    replies: '11',
    views: '2.7k',
    author: {
      name: 'Dries Vincent',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    date: '9 décembre à 11h43',
    datetime: '2020-12-09T11:43:00',
    href: '#',
    title: 'Le Nyan Cat !',
    gif: '/images/nyan-cat.gif',
  },
]

export default function Home() {
  return (
    <div className="py-10">
      <div className="max-w-3xl mx-auto sm:px-6">
        <main className="">
          <h1 className="sr-only">posts</h1>
          <ul className="space-y-4">
            {posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </ul>
        </main>
      </div>
    </div>
  )
}
