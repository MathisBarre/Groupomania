import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { useForm } from "react-hook-form"
import { useConnectedUserContext } from "@/pages/_app"
import connectUser from "@/api/connectUser"
import { XCircleIcon } from '@heroicons/react/solid'

export default function Login() {
  const { connectedUser, setConnectedUser } = useConnectedUserContext()
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const router = useRouter()
  const [errorMessage, setErrorMessage] = useState(null)
  
  async function onSubmit({ email, password}) {
    try {
      setErrorMessage(null)
      const user = await connectUser({ email, password })
      setConnectedUser(user)
      router.push("/feed")
    } catch (error) {
      setErrorMessage(error.message)
    }
  }

  return (
    <main className="flex flex-col w-full max-w-3xl py-10 mx-auto sm:px-6">
      <section className="flex flex-col w-full px-4 py-6 bg-white shadow sm:p-6 sm:rounded-lg">
        <h1 className="mb-8 text-xl font-bold text-rose-600">Se connecter</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <div className="flex flex-col">
            <label className="text-sm">Adresse e-mail</label>
            <input 
              className={`block w-full mt-1 ${errors.email ? "border-red-300 focus:border-red-400 placeholder-red-500 focus:ring-red-200" : "border-gray-300 focus:border-indigo-300 focus:ring-indigo-200"} rounded-md shadow-sm  focus:ring focus:ring-opacity-50`} 
              type="email" 
              placeholder="johndoe@mail.com"
              {...register("email", { required: true, pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" })}
            />
            { errors.email && <p className="text-red-500">L&apos;adresse e-mail doit être renseignée !</p> }
          </div>
          <div className="flex flex-col mt-4">
            <label className="text-sm">Mot de passe</label>
            <input 
              className={`${errors.password ? "border-red-300 focus:border-red-400 placeholder-red-500 focus:ring-red-200" : "border-gray-300 focus:border-indigo-300 focus:ring-indigo-200"} block w-full mt-1 rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
              type="password" 
              {...register("password", { required: true })}
            />
            { errors.password && <p className="text-red-500">Le mot de passe doit être renseignée</p> }
          </div>
          <div className="flex items-center mt-4">
            <input 
              className="w-full px-4 py-2 font-medium text-white transition duration-75 border border-transparent rounded-md shadow-sm cursor-pointer bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500" 
              type="submit" 
              value="Se connecter" 
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
      <Link href="/signup"><a className="block px-4 py-2 m-auto mt-8 text-sm text-center text-gray-600 transition duration-75 hover:underline hover:rounded hover:text-black" href="">Je n&apos;ai pas de compte</a></Link>
    </main>
  )
}