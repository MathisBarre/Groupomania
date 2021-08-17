import Image from "next/image"
import Link from "next/link"
import Logo from "@/public/images/logos/icon-left-font-white.svg"
import IndexBgImg from "@/public/images/charles-forerunner-unsplash.webp"

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <div className="relative flex items-center justify-center flex-1 pb-4 lg:items-end lg:justify-start lg:pl-16 xl:pl-32 bg-rose-700">
        <Image src={IndexBgImg} alt="" className="absolute inset-0" objectFit="cover" layout="fill" />
        <div className="absolute inset-0 opacity-80 bg-rose-700" />
        <div className="px-8 sm:px-16 maw-w-[8rem]">
          <Image src={Logo} layout="intrinsic" height="95" width="512" alt="groupomania" />
        </div>
      </div>
      <div className="flex flex-col px-6 py-8 lg:flex-row lg:py-16 lg:justify-end lg:pr-32">
        <Link href="/login">
          <a
            className="inline-flex items-center justify-center px-4 py-2 mb-4 text-lg font-medium text-center border border-transparent rounded-md shadow-sm lg:mb-0 lg:mr-2 border-rose-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 text-rose-600"
          >
            Se connecter
          </a>
        </Link>
        <Link href="/signup">
          <a
            className="inline-flex items-center justify-center px-4 py-2 text-lg font-medium text-center text-white border border-transparent rounded-md shadow-sm bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
          >
            S&apos;inscrire
          </a>
        </Link>
      </div>
    </div>
  )
}