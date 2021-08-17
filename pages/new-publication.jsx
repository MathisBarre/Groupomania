import { useState } from "react"
import { useForm } from "react-hook-form"
import { useRouter } from "next/router"
import createPublication from "@/api/createPublication";
import { XCircleIcon } from '@heroicons/react/solid'
import FormButton from "@/components/FormButton";

export default function NewPublication() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter()
  const [errorMessage, seterrorMessage] = useState(null)
  const [publicationIsPosting, setPublicationIsPosting] = useState(false)
  
  async function onSubmit(data) {
    try {
      seterrorMessage(null)
      setPublicationIsPosting(true)
      await createPublication(data.title, data.externalGifURl)
      router.push("/feed")
    } catch(error) {
      seterrorMessage(error.message)
      setPublicationIsPosting(false)
    }
  }

  return (
    <main className="flex flex-col w-full max-w-3xl py-10 mx-auto sm:px-6">
      <section className="flex flex-col w-full px-4 py-6 bg-white shadow sm:p-6 sm:rounded-lg">
        <h1 className="mb-8 text-xl font-bold text-rose-600">Ajouter une publication</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <div className="flex flex-col">
            <label className="text-sm">Titre de la publication</label>
            <input 
              className={`block w-full mt-1 ${errors.externalGifURl ? "invalid-input" : "valid-input"} input`} 
              type="text" 
              {...register("title", { required: true })}
            />
            { errors.title && <p className="text-red-500">Le titre doit être renseigné !</p> }
          </div>
          <div className="flex flex-col mt-4">
            <label className="text-sm">Lien URL du GIF</label>
            <div className="flex mt-1 rounded-md shadow-sm">
              {/* <span className="inline-flex items-center px-3 text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
                http://
              </span> */}
              <input
                type="text"
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
            <FormButton loading={publicationIsPosting} text="Ajouter une publication" />
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

      </section>
    </main>
  )
}