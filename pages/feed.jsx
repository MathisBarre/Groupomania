import { useState } from "react"
import useSWR from "swr"
import fetcher from "@/api/fetcher"
import Post from "@/components/Post"
import WarningAlert from "@/components/warning-alert"
import MyDialog from "@/components/Dialog"

export default function Feed() {
  const { data, error } = useSWR("http://localhost:3001/publications", fetcher)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const currentComments = [
    {
      "id": 2,
      "content": "C'est incroyable !",
      "publication_id": 14,
      "author_id": 2,
      "user": {
        "display_name": "mathisbarre",
        "profile_image_url": null
      },
      "date_creation_fr": "16 août 2021 à 20:37"
    },
    {
      "id": 1,
      "content": "J'adore",
      "publication_id": 14,
      "author_id": 2,
      "user": {
        "display_name": "mathisbarre",
        "profile_image_url": null
      },
      "date_creation_fr": "16 août 2021 à 20:37"
    }
  ]

  if (data) {
    return (
      <>
        <MyDialog isOpen={isDialogOpen} setIsOpen={setIsDialogOpen} comments={currentComments} />
        <div className="w-full py-10">
          <div className="max-w-3xl mx-auto sm:px-6">
            <main>
              <h1 className="sr-only">posts</h1>
              <ul className="space-y-4">
                {data.map((post) => (
                  <Post 
                    key={post.id} 
                    post={post} 
                    setIsDialogOpen={setIsDialogOpen} 
                  />
                ))}
              </ul>
            </main>
          </div>
        </div>
      </>
    )
  } else if (error) {
    return (
      <main className="w-full max-w-3xl m-auto mt-8">
        <WarningAlert
          title="Le flux n'a pas pu être chargé"
          text="Un problème est survenu durant le chargement de la page. Veuillez recharger la page."
        />
      </main>
    )
  } else {
    return (
      <div className="w-full py-10">
        <div className="max-w-3xl mx-auto sm:px-6">
          <main className="flex items-center justify-center p-4 bg-white rounded">
            <svg className="w-8 h-8 mr-8 text-rose-500 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <p className="font-semibold text-rose-700">Chargement des données...</p>
          </main>
        </div>
      </div>
    )
  }
}