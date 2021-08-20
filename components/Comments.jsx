import dayjs from "dayjs"
import "dayjs/locale/fr"

export default function Comments({ comments }) {
  if (comments && comments[0]) {
    console.log(comments)
    return (
      <div className="space-y-4">
        { comments.map((comment) => (

          <Comment
            key={comment.id} 
            displayName={comment.user.display_name} 
            content={comment.content} 
            image={comment.user.profile_image_url}
            dateCreation={comment.date_creation}
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

function Comment({ displayName, content, image, dateCreation }) {
  return (
    <div className="flex">
      <div className="flex-shrink-0 mr-4">
        <img 
          className="w-10 h-10 rounded-full" 
          src={(image === "") ? "/images/default-profil-image.svg" : image} 
          height="40" width="40" 
          alt=""
        />
      </div>
      <div>
        <h4 className="font-semibold text-md">
          { displayName }
          <time 
            className="ml-2 text-sm text-gray-400" 
            dateTime={dateCreation}
          >
            {dayjs(dateCreation).locale("fr").format("DD/MM/YY HH[h]mm")}
          </time>
        </h4>
        <p>
          { content }
        </p>
      </div>
    </div>
  )
}
