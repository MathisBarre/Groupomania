import Link from "next/link"
import { ArrowSmRightIcon } from "@heroicons/react/solid"

export default function() {
  return (
    <div class="h-full flex flex-col justify-center items-center flex-1">
      <h1 className="text-3xl font-bold text-rose-600">Erreur 404</h1>
      <p className="mb-6 text-gray-600">Malheureusement, cette page n'existe pas 😢</p>
      <img src="/images/crying.gif" className="rounded" />
      <Link href="/">
        <a
          className="flex items-center px-4 py-2 mt-4 text-sm font-medium transition duration-100 transform text-rose-600 hover:scale-110 hover:bg-rose-100 hover:rounded"
        >
          Retourner sur la page d'accueil
          <ArrowSmRightIcon className="h-4 ml-1" />
        </a>
      </Link>
    </div>
  )
}