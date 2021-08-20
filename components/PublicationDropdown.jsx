/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { DotsVerticalIcon, PencilAltIcon, TrashIcon } from '@heroicons/react/solid'
import classNames from "@/utils/classNames"
import deleteOnePublication from "@/api/deleteOnePublication"
import { mutate } from 'swr';

export default function PublicationDropdown({ publication, setShowUpdateUi }) {

  async function deleteAction() {
    try {
      await deleteOnePublication(publication.id)
      mutate(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/publications`)
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex items-center text-gray-400 rounded-full hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          <span className="sr-only">Open options</span>
          <DotsVerticalIcon className="w-5 h-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <MenuItem text="Modifier" Icon={PencilAltIcon} onClick={() => { setShowUpdateUi(true) }} />
            <MenuItem text="Supprimer" Icon={TrashIcon} onClick={deleteAction} />
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

function MenuItem({ text, Icon, onClick }) {
  return (
    <Menu.Item>
      {({ active }) => (
        <a
          onClick={onClick}
          className={classNames(
            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
            'group flex items-center px-4 py-2 text-sm cursor-pointer'
          )}
        >
          <Icon className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
          { text }
        </a>
      )}
    </Menu.Item>
  )
}