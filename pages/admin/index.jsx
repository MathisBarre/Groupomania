/* This example requires Tailwind CSS v2.0+ */
import { useState } from 'react'
import Table from "@/components/admin/Table"
import SidebarNavigation, { ToggleSidebarBtn } from "@/components/admin/SidebarNavigation"
import useSWR from "swr"
import fetcher from '@/api/fetcher'

export default function Admin() {
  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/users`, fetcher)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <SidebarNavigation sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        <ToggleSidebarBtn setSidebarOpen={setSidebarOpen} />
        <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none">
          <div className="py-16">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">Utilisateurs</h1>
            </div>
            <div className="px-4 mx-auto mt-8 max-w-7xl sm:px-6 md:px-8">
              { data ? <Table people={data} /> : "" }
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
