import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { useForm } from "react-hook-form"
import { XCircleIcon, CheckIcon, XIcon } from '@heroicons/react/solid'
import { useConnectedUserContext } from "@/pages/_app"


export default function Profil() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const router = useRouter()
  const { connectedUser, setConnectedUser } = useConnectedUserContext()
  const [errorMessage, setErrorMessage] = useState(null)

  console.log(connectedUser)

  function onSubmit() {
    alert("submit")
  }

  return (
    <main className="flex flex-col w-full max-w-3xl py-10 mx-auto sm:px-6">
      <section className="flex flex-col w-full px-4 py-6 bg-white shadow sm:p-6 sm:rounded-lg">
      <h1 className="mb-8 text-xl font-bold text-rose-600">Modifier mon profil</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">

          <div className="flex flex-col">
            <label className="text-sm">Pseudonyme</label>
            <input 
              defaultValue={connectedUser.displayName}
              className={`block w-full mt-1 ${errors.displayName ? "invalid-input" : "valid-input"} input`} 
              type="text" 
              {...register("displayName", { required: true })}
            />
            { errors.displayName && <p className="text-red-500">Le pseudonyme doit être renseigné !</p> }
          </div>

          <div className="flex flex-col mt-4">
            <label className="text-sm">Adresse e-mail</label>
            <input 
              defaultValue={connectedUser.email}
              className={`block w-full mt-1 ${errors.email ? "invalid-input" : "valid-input"} input`} 
              type="email" 
              placeholder="johndoe@mail.com"
              {...register("email", { required: true, pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" })}
            />
            { errors.email && <p className="text-red-500">L&apos;adresse e-mail doit être renseignée !</p> }
          </div>

          <div className="flex flex-col mt-4">
            <label className="text-sm">URL de l&apos;image de profil</label>
            <input 
              defaultValue={connectedUser.profileImageUrl || ""}
              className={`block w-full mt-1 ${errors.profileImage ? "invalid-input" : "valid-input"} input`} 
              type="text" 
              {...register("profileImage", { required: true })}
            />
            { errors.profileImage && <p className="text-red-500">Le pseudonyme doit être renseigné !</p> }
          </div>

          <div className="flex items-center mt-4">
            <input 
              className="w-full px-4 py-2 font-medium text-white transition duration-75 border border-transparent rounded-md shadow-sm cursor-pointer bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500" 
              type="submit" 
              value="Mettre à jour le compte" 
            />
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

function Badge({ text, conditionIsFulfilled }) {
  return (
    <li className={`${conditionIsFulfilled() ? 'text-green-700 bg-green-100' : 'text-gray-700 bg-gray-100'} inline-flex items-center px-2 py-1 m-1  rounded-full `}>
      { conditionIsFulfilled() ? <CheckIcon className="h-4 mr-1" /> : <XIcon className="h-4 mr-1" />}
      { text }
    </li>
  )
}