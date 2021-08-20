import { useState } from "react"
import { ChatAltIcon } from "@heroicons/react/solid"
import dayjs from "dayjs"
import "dayjs/locale/fr"
import PublicationDropdown from "@/components/PublicationDropdown"
import { useConnectedUserContext } from "@/pages/_app"
import FormButton from "./FormButton"
import { XCircleIcon, XIcon } from "@heroicons/react/solid"
import { useForm } from "react-hook-form"
import updateOnePublication from "@/api/updateOnePublication"

export default function Post({ post, setIsDialogOpen, setCurrentPostId }) {
  const { connectedUser, setConnectedUser } = useConnectedUserContext()
  const [showUpdateUi, setShowUpdateUi] = useState(false)

  return (
    <>
      <li key={post.id} className="relative px-4 py-6 overflow-hidden bg-white shadow sm:p-6 sm:rounded-lg">
        <article aria-labelledby={'post-title-' + post.id}>
          <div>
            <div className="flex space-x-3">
              <div className="flex-shrink-0">
                <img 
                  className="w-10 h-10 rounded-full" 
                  src={(post.user.profile_image_url === "") ? "/images/default-profil-image.svg" : post.user.profile_image_url} 
                  height="40" width="40" 
                  alt=""
                  />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">
                  {post.user.display_name}
                </p>
                <p className="text-sm text-gray-500">
                  <time dateTime={post.date_creation}>{dayjs(post.date_creation).locale("fr").format("DD MMMM YYYY [à] HH[h]mm")}</time>
                </p>
              </div>
              {
                (connectedUser?.role === "admin" || connectedUser?.id === post.user.id) 
                && <PublicationDropdown publication={post} setShowUpdateUi={setShowUpdateUi} />
              }
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

        { showUpdateUi && <PostUpdate publication={post} setShowUpdateUi={setShowUpdateUi} /> }
      </li>
    </>
  )
}

function PostUpdate({ publication, setShowUpdateUi }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [publicationIsUpdating, setPublicationIsUpdating] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const { connectedUser, setConnectedUser } = useConnectedUserContext()

  async function onSubmit(data) {
    try {
      setErrorMessage(null)
      setPublicationIsUpdating(true)
      await updateOnePublication(data.title, data.externalGifURl, connectedUser.id, publication.id)
      setPublicationIsUpdating(false)
      setShowUpdateUi(false)
    } catch(error) {
      setErrorMessage(error.message)
      setPublicationIsUpdating(false)
    }
  }

  return (
    <article className="absolute inset-0 px-4 py-6 bg-white sm:p-6 bg-opacity-95">
      <button
        type="button"
        className="absolute flex items-center justify-center w-8 h-8 bg-gray-200 rounded right-4 sm:right-6 top-6"
        onClick={() => {setShowUpdateUi(false)}}
      >
        <XIcon className="w-4 h-4" />
      </button>
      <h2 className="section-title">Modifier la publication</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <div className="flex flex-col">
            <label className="text-sm">Titre de la publication</label>
            <input 
              className={`block w-full mt-1 ${errors.externalGifURl ? "invalid-input" : "valid-input"} input`} 
              type="text" 
              defaultValue={publication.title}
              {...register("title", { required: true })}
            />
            { errors.title && <p className="text-red-500">Le titre doit être renseigné !</p> }
          </div>
          <div className="flex flex-col mt-4">
            <label className="text-sm">Lien URL du GIF</label>
            <div className="flex mt-1 rounded-md shadow-sm">
              <input
                type="text"
                defaultValue={publication.image_url}
                name="company-website"
                id="company-website"
                className={`flex-1 block w-full min-w-0 px-3 py-2 rounded-md placeholder-gray-400 ${errors.externalGifURl ? "border-red-300 focus:border-red-400 placeholder-red-300 focus:ring-red-200" : "valid-input"} focus:ring focus:ring-opacity-50`}
                placeholder="https://www.example.com"
                {...register("externalGifURl", { required: true })}
              />
            </div>
            { errors.externalGifURl && <p className="text-red-500">Le lien doit être renseigné !</p> }
          </div>
          <div className="flex items-center mt-4">
            <FormButton loading={publicationIsUpdating} text="Modifier la publication" />
          </div>
        </form>

        { (errorMessage) && <div className="p-4 mt-4 rounded-md bg-red-50">
          <div className="flex">
            <div className="flex-shrink-0">
              <XCircleIcon className="w-5 h-5 text-red-400" aria-hidden="true" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">{ errorMessage }</h3>
            </div>
          </div>
        </div> }
    </article>
  )
}