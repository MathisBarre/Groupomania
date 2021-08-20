import { Fragment } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { Popover, Menu, Transition } from '@headlessui/react'
import { useConnectedUserContext } from "@/pages/_app"
import groupomaniaLogo from "@/public/images/logos/icon-left-font.svg"
import { useCookies } from "react-cookie"
import defaultProfileImage from "@/public/images/default-profil-image.svg"
import disconnectUser from "@/api/disconnectUser"
import classNames from "@/utils/classenames"

const user = {
  name: 'Chelsea Hagon',
  email: 'chelseahagon@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

export default function Header() {
  const { connectedUser, setConnectedUser } = useConnectedUserContext()
  const [ cookies, setCookie, removeCookie ] = useCookies(["connectedUser"])
  const router = useRouter()
  
  const profileNavigation = [
    { name: 'Profil', href: '/profil' },
    { name: 'Déconnexion', onClick: () => {
      try {
        disconnectUser()
        removeCookie("connectedUser")
        setConnectedUser(null)
        router.push("/login")
      } catch {
        alert("error during logout")
      }
    }},
  ]
  
  return (
    <Popover
      as="header"
      className={({ open }) =>
        classNames(
          open ? 'fixed inset-0 z-40 overflow-y-auto' : '',
          'bg-white shadow-sm lg:static lg:overflow-y-visible py-2'
        )
      }
    >
      {({ open }) => (
        <>
          <div className="max-w-3xl px-4 mx-auto sm:px-6">
            <div className="relative flex justify-between">
              <div className="flex">
                <div className="flex items-center flex-shrink-0">
                  <Link href={connectedUser ? "/feed" : "/"}>
                    <a className="flex items-center">
                      <Image
                        className="block w-auto h-8"
                        src={groupomaniaLogo}
                        alt="Groupomania"
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="flex-1 min-w-0 md:px-8 lg:px-0">
              </div>
              <div className="flex items-center sm:hidden">
                <Popover.Button className="inline-flex items-center justify-center p-2 -mx-2 text-gray-400 rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500">
                  <span className="sr-only">Open menu</span>
                  {open ? (
                    <XIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Popover.Button>
              </div>
              <div className="hidden sm:flex sm:items-center sm:justify-end">
                {
                  (connectedUser) ?
                  <div className="flex items-center">
                    <ProfileMenu profileNavigation={profileNavigation} />
                    <HeaderLink text="Nouvelle publication" href="/new-publication" className="ml-4" />
                  </div>
                : <>
                    <HeaderLink text="Se connecter" href="/login" secondary className="mr-2" />
                    <HeaderLink text="S'inscrire" href="/signup" />
                  </>
                }
              </div>
            </div>
          </div>
          <HeaderMobile profileNavigation={profileNavigation} connectedUser={connectedUser} />
        </>
      )}
    </Popover>
  )
}

function ProfileMenu({ profileNavigation }) {
  const { connectedUser, setConnectedUser } = useConnectedUserContext()

  return (
    <Menu as="div" className="relative flex-shrink-0">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="flex bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500">
              <span className="sr-only">Open user menu</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                className="w-8 h-8 rounded-full" 
                src={(connectedUser.profileImageUrl === "") ? "/images/default-profil-image.svg" : connectedUser.profileImageUrl} 
                height="38" width="38"
                alt="" 
              />
            </Menu.Button>
          </div>
          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              {profileNavigation.map((item) => {
                if (item.onClick) {
                  return <Menu.Item key={item.name}>
                    {({ active }) => (
                      <button
                        className={classNames(
                          active ? 'bg-gray-100' : '',
                          'block py-2 px-4 text-sm text-gray-700 w-full text-left'
                        )}
                        onClick={item.onClick}
                      >
                        {item.name}
                      </button>
                    )}
                  </Menu.Item>
                } else {
                  return <Menu.Item key={item.name}>
                    {({ active }) => (
                      <Link href={item.href} >
                        <a
                          className={classNames(
                            active ? 'bg-gray-100' : '',
                            'block py-2 px-4 text-sm text-gray-700 w-full text-left'
                          )}
                        >
                          {item.name}
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                }
              })}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}

function HeaderLink({ text, href, secondary, className }) {
  return (
    <Link href={href}>
      <a
        className={`
          inline-flex items-center px-4 py-2 text-sm font-medium border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500
          ${secondary ? "text-rose-600 bg-white border-rose-600 hover:bg-gray-100" : "bg-rose-600 text-white hover:bg-rose-700 border-transparent"}
          ${className}
        `}
      >
        { text }
      </a>
    </Link>
  )
}

function HeaderMobile({ profileNavigation, connectedUser }) {
  return (
    <Popover.Panel as="nav" className="sm:hidden" aria-label="Global">
      <div className="pt-4 pb-3">
        {
          connectedUser ? ( 
            <>
              <div className="flex items-center max-w-3xl px-4 mx-auto sm:px-6">
                <div className="flex-shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    className="w-10 h-10 rounded-full" 
                    src={(connectedUser?.profileImageUrl === "") ? "/images/default-profil-image.svg" : connectedUser?.profileImageUrl} 
                    height="40" width="40"
                    alt="" 
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">{connectedUser?.displayName}</div>
                  <div className="text-sm font-medium text-gray-500">{connectedUser?.email}</div>
                </div>
              </div>
              <div className="max-w-3xl px-2 mx-auto mt-3 space-y-1 sm:px-4">
              {profileNavigation.map((item) => {
                if (item.onClick) {
                  return <button
                    key={item.name}
                    onClick={item.onClick}
                    className="block w-full px-3 py-2 text-base font-medium text-left text-gray-500 rounded-md hover:bg-gray-50 hover:text-gray-900"
                  >
                    {item.name}
                  </button>
                }
                else {
                  return <Link key={item.name} href={item.href}>
                    <a
                      key={item.name}
                      
                      className="block px-3 py-2 text-base font-medium text-gray-500 rounded-md hover:bg-gray-50 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </Link>
                }
              })}
            </div>
          </>
          )
        : (
          <div className="px-4 py-4">
            <HeaderLink text="Se connecter" href="/login" secondary className="justify-center w-full mb-2" />
            <HeaderLink text="S'inscrire" href="/signup" className="justify-center w-full mb-2" />
          </div>
        )}
        
      </div>
    </Popover.Panel>
  )
}