import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Login from "@/components/Login"
import Signup from "@/components/Signup"
import classNames from '@/utils/classNames'

export default function Example() {
  const tabNames = ["Se connecter", "Créer un compte"]

  return (
    <div className="w-full">
      <Tab.Group>
        <Tab.List className="flex space-x-2">
          {tabNames.map((name, index) => (
            <Tab
              key={name}
              className={({ selected }) =>
                classNames(
                  'w-full py-4 text-sm leading-5 font-bold text-rose-700 sm:rounded-lg',
                  selected
                    ? 'bg-white shadow'
                    : 'text-rose-100 hover:bg-white/[0.12] hover:text-white',
                  index === 0 ? "rounded-r-lg" : "rounded-l-lg"
                )
              }
            >
              {name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
            <Tab.Panel>
              <Login />
            </Tab.Panel>
            <Tab.Panel>
              <Signup />
            </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
