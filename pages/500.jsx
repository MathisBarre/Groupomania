import Link from "next/link"
import Image from "next/image"
import { ArrowSmRightIcon } from "@heroicons/react/solid"
import ServerExplode from "@/public/images/server-explode.gif"

export default function Error404() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 h-full">
      <h1 className="text-3xl font-bold text-rose-600">Erreur 500</h1>
      <p className="mb-6 text-gray-600 text-left mx-4">Le serveur a rencontré une erreur lors de la génération de votre page.</p>
      <Image src={ServerExplode} className="rounded" alt="" />
      <Link href="/">
        <a
          className="flex items-center px-4 py-2 mt-4 text-sm font-medium transition duration-100 transform text-rose-600 hover:scale-110 hover:bg-rose-100 hover:rounded"
        >
          Retourner sur la page d&apos;accueil
          <ArrowSmRightIcon className="h-4 ml-1" />
        </a>
      </Link>
    </div>
  )
}