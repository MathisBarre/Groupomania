import Image from "next/image"
import Link from "next/link"
import Logo from "@/public/images/logos/icon-left-font-white.svg"
import IndexBgImg from "@/public/images/charles-forerunner-unsplash.webp"

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <div className="relative flex items-end justify-start flex-1 pb-4 pl-32 bg-rose-700">
        <Image src={IndexBgImg} alt="" className="absolute inset-0" objectFit="cover" layout="fill" />
        <div className="absolute inset-0 opacity-80 bg-rose-700" />
        <Image src={Logo} className="h-12" height="95" width="512" alt="groupomania" />
      </div>
      <div className="flex justify-end px-32 py-16">
        <Link href="/login">
          <a
            className="inline-flex items-center px-4 py-2 mr-2 text-lg font-medium border border-transparent rounded-md shadow-sm border-rose-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 text-rose-600 curso"
          >
            Se connecter
          </a>
        </Link>
        <Link href="/signup">
          <a
            className="inline-flex items-center px-4 py-2 text-lg font-medium text-white border border-transparent rounded-md shadow-sm bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 curso"
          >
            S&apos;inscrire
          </a>
        </Link>
      </div>
    </div>
  )
}