import { ExclamationIcon } from '@heroicons/react/solid'

export default function WarningAlert({ title, text}) {
  return (
    <div className="p-4 rounded-md bg-yellow-50">
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationIcon className="w-5 h-5 text-yellow-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-semibold text-yellow-800">{ title }</h3>
          <div className="mt-2 text-sm text-yellow-700">
            <p>
              { text }
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
