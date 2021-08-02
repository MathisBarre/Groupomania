import Link from "next/link"
import { CheckIcon, XIcon } from "@heroicons/react/solid"

export default function() {
  return (
    <main className="flex flex-col w-full max-w-3xl py-10 mx-auto sm:px-6">
      <section className="flex flex-col w-full px-4 py-6 bg-white shadow sm:p-6 sm:rounded-lg">
        <h1 className="mb-8 text-xl font-bold text-rose-600">Créer un compte</h1>
        <form className="flex flex-col">
          <div className="flex flex-col">
            <label className="text-sm">Votre adresse e-mail</label>
            <input 
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" 
              type="email" 
              placeholder="johndoe@mail.com" 
            />
          </div>
          <div className="flex flex-col mt-4">
            <label className="text-sm">Votre mot de passe</label>
            <input 
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" 
              type="password" 
            />
            <ul className="mt-2 -mx-1">
              <Badge text="contient une majuscule" />
              <Badge text="contient une minuscule" conditionIsFulfilled />
              <Badge text="contient un chiffre" />
              <Badge text="contient au moins 11 caractères" />
            </ul>
          </div>
          <div className="flex items-center mt-4">
            <input 
              className="w-full px-4 py-2 font-medium text-white transition duration-75 border border-transparent rounded-md shadow-sm cursor-pointer bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500" 
              type="submit" 
              value="Créer le compte" 
            />
          </div>
        </form>
      </section>
      <Link href="/login"><a className="block px-4 py-2 m-auto mt-8 text-sm text-center text-gray-600 transition duration-75 hover:underline hover:rounded hover:text-black" href="">J'ai déjà un compte</a></Link>
    </main>
  )
}

function Badge({ text, conditionIsFulfilled }) {
  return (
    <li className={`${conditionIsFulfilled ? 'text-green-700 bg-green-100' : 'text-gray-700 bg-gray-100'} inline-flex items-center px-2 py-1 m-1  rounded-full `}>
      { conditionIsFulfilled ? <CheckIcon className="h-4 mr-1" /> : <XIcon className="h-4 mr-1" />}
      { text }
    </li>
  )
}