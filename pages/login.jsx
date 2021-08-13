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
  const [requestSending, setRequestSending] = useState(false)

  
  async function onSubmit({ email, password}) {
    try {
      setRequestSending(true)
      setErrorMessage(null)
      const user = await connectUser({ email, password })
      setConnectedUser(user)
      setRequestSending(false)
      router.push("/feed")
    } catch (error) {
      setErrorMessage(error.message)
      setRequestSending(false)
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
              className={`block w-full mt-1 ${errors.email ? "invalid-input" : "valid-input"} input`} 
              type="email" 
              placeholder="johndoe@mail.com"
              {...register("email", { required: true, pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" })}
            />
            { errors.email && <p className="text-red-500">L&apos;adresse e-mail doit être renseignée !</p> }
          </div>
          <div className="flex flex-col mt-4">
            <label className="text-sm">Mot de passe</label>
            <input 
              className={`${errors.password ? "invalid-input" : "valid-input"} block w-full mt-1 input`}
              type="password" 
              {...register("password", { required: true })}
            />
            { errors.password && <p className="text-red-500">Le mot de passe doit être renseignée</p> }
          </div>
          <div className="flex items-center mt-4">
            <button 
              className="flex justify-center w-full px-4 py-2 font-medium text-white transition duration-75 border border-transparent rounded-md shadow-sm cursor-pointer bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500" 
              type="submit" 
            >
              { requestSending ?
                <svg className="w-6 h-6 mr-3 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                : "Se connecter"
              }
            </button>
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