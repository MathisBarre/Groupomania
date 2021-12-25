import Image from "next/image"
import Link from "next/link"
import Logo from "@/public/images/logos/icon-left-font-white.svg"
import IndexBgImg from "@/public/images/charles-forerunner-unsplash.webp"
import Tabs from "@/components/Tabs"

export default function Home() {
  return (
    <div className="flex flex-1 bg-rose-700">
      {/* BACKGROUND */}
      <Image src={IndexBgImg} alt="" className="fixed inset-0" objectFit="cover" layout="fill" />
      <div className="fixed inset-0 opacity-80 bg-rose-700" />
      {/* BACKGROUND */}

      {/* <Login /> */}
      <div className="z-10 flex flex-col items-center justify-center w-full max-w-xl mx-auto">
        <Image src={Logo} layout="intrinsic" alt="groupomania" width="350" height="56" />
        <Tabs />
        { process.env.NEXT_PUBLIC_DEMO_MODE && (<div className="mt-4 w-full px-4 py-6 bg-white rounded-lg shadow sm:p-6">
          <h2 className="uppercase font-bold">Mode démonstration activé</h2>
          <h3 className="mt-2">Compte de démo :</h3>
          <ul className="list-disc ml-5">
            <li><strong>email:</strong> demo@mail.com</li>
            <li><strong>mdp:</strong> aA123456789</li>
          </ul>

          <h3 className="mt-2">Pages d&apos;erreurs :</h3>
          <ul className="list-disc ml-5">
            <li className="underline"><Link href="/404"><a>Page &quot;Erreur 404 : not found&quot;</a></Link></li>
            <li className="underline"><Link href="/500"><a>Page &quot;Erreur 500 : internal server error&quot;</a></Link></li>
          </ul>
        </div>)}
      </div>
    </div>
  )
}