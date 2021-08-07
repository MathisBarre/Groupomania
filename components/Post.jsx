import Image from "next/image"

export default function Post({ post }) {
  return (
    <li key={post.id} className="px-4 py-6 bg-white shadow sm:p-6 sm:rounded-lg">
      <article aria-labelledby={'post-title-' + post.id}>
        <div>
          <div className="flex space-x-3">
            <div className="flex-shrink-0">
              <Image className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" height="40" width="40" alt="" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">
                {post.user.display_name}
              </p>
              <p className="text-sm text-gray-500">
                <a href={post.href} className="hover:underline">
                  <time dateTime={post.date_creation}>{post.date_creation}</time>
                </a>
              </p>
            </div>
          </div>
          <h2 id={'post-title-' + post.id} className="mt-4 text-base font-medium text-gray-900">
            {post.title}
          </h2>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="object-contain w-full mt-2 bg-gray-100 rounded max-h-[25rem]" src={post.image_url} alt="" />
      </article>
    </li>
  )
}