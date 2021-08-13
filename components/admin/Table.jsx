const tableTitles = [ "ID", "Pseudonyme", "E-mail", "Rôle", "Date création" ]

export default function Table({ people }) {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  { tableTitles.map((title, index) => <TableHeadCell key={`${title}-${index}`} text={title} /> ) }
                  {/* <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th> */}
                </tr>
              </thead>
              <tbody>
                {people.map((person, index) => <TableRow key={person.email} person={person} index={index} /> )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

function TableHeadCell({ text }) {
  return (
    <th
      scope="col"
      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
    >
      { text }
    </th>
  )
}

function TableRow({ person, index }) {
  return (
    <tr className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
      <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{person.id}</td>
      <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{person.display_name}</td>
      <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{person.email}</td>
      <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{person.role}</td>
      <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{person.date_creation_fr}</td>
      {/* <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
        <a href="#" className="text-indigo-600 hover:text-indigo-900">
          Edit
        </a>
      </td> */}
    </tr>
  )
}