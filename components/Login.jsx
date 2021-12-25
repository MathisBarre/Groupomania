import { useState } from "react"
import { useRouter } from "next/router"
import { useForm } from "react-hook-form"
import { useConnectedUserContext } from "@/pages/_app"
import connectUser from "@/api/connectUser"
import { XCircleIcon } from '@heroicons/react/solid'
import FormButton from "@/components/FormButton"

export default function Login() {
  const { setConnectedUser } = useConnectedUserContext()
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
    <section className="flex flex-col w-full px-4 py-6 bg-white rounded-lg shadow sm:p-6">
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
          <FormButton loading={requestSending} text="Se connecter" />
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
  )
}