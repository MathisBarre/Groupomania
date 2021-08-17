import Image from "next/image"
import defaultProfileImage from "@/public/images/default-profil-image.svg"

export default function Comments({ comments }) {
  if (comments && comments[0]) {
    return (
      <div className="space-y-4">
        { comments.map((comment) => (
          <Comment
            key={comment.id} 
            displayName={comment.user.display_name} 
            content={comment.content} 
            image={comment.user.profile_image_url}
          />
        ))}
      </div>
    )
  } else {
    return (
      <p>Aucun commentaire ! Pour le moment...</p>
    )
  }
}

function Comment({ displayName, content, image }) {
  return (
    <div className="flex">
      <div className="flex-shrink-0 mr-4">
        <Image className="w-10 h-10 rounded-full" src={image || defaultProfileImage} height="40" width="40" alt="" />
      </div>
      <div>
        <h4 className="font-semibold text-md">{ displayName }</h4>
        <p>
          { content }
        </p>
      </div>
    </div>
  )
}
