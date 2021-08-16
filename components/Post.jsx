import Image from "next/image"
import defaultProfileImage from "@/public/images/default-profil-image.svg"
import { ChatAltIcon } from "@heroicons/react/solid"

export default function Post({ post, setIsDialogOpen, setCurrentPostId }) {
  return (
    <>
      <li key={post.id} className="px-4 py-6 bg-white shadow sm:p-6 sm:rounded-lg">
        <article aria-labelledby={'post-title-' + post.id}>
          <div>
            <div className="flex space-x-3">
              <div className="flex-shrink-0">
                <Image className="w-10 h-10 rounded-full" src={post.userprofileImageUrl || defaultProfileImage} height="40" width="40" alt="" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">
                  {post.user.display_name}
                </p>
                <p className="text-sm text-gray-500">
                  <a href={post.href} className="">
                    <time dateTime={post.date_creation}>{post.date_creation_fr}</time>
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
          <div className="flex justify-between mt-6 space-x-8">
            <button 
              className="flex items-center px-2 py-1 space-x-2 text-gray-500 border border-gray-200 rounded hover:border-gray-300 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
              onClick={() => {setIsDialogOpen(true); setCurrentPostId(post.id)}}  
            >
              <ChatAltIcon className="w-5 h-5" aria-hidden="true" />
              <span className="font-medium">{ post._count.comment } commentaires</span>
            </button>
          </div>
        </article>
      </li>
    </>
  )
}