import Image from "next/image"

export default function Post({ post }) {
  return (
    <li key={post.id} className="px-4 py-6 bg-white shadow sm:p-6 sm:rounded-lg">
      <article aria-labelledby={'post-title-' + post.id}>
        <div>
          <div className="flex space-x-3">
            <div className="flex-shrink-0">
              <img className="w-10 h-10 rounded-full" src={post.author.imageUrl} alt="" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">
                <a href={post.author.href} className="hover:underline">
                  {post.author.name}
                </a>
              </p>
              <p className="text-sm text-gray-500">
                <a href={post.href} className="hover:underline">
                  <time dateTime={post.datetime}>{post.date}</time>
                </a>
              </p>
            </div>
          </div>
          <h2 id={'post-title-' + post.id} className="mt-4 text-base font-medium text-gray-900">
            {post.title}
          </h2>
        </div>
        <div class="relative h-64 md:h-96 mt-2">
          <Image className="object-cover rounded" layout="fill" src="/images/nyan-cat.gif" />
        </div>
      </article>
    </li>
  )
}