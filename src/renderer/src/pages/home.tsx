import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

export function Home() {
  // async function handleAdd() {
  //   const response = await window.api.fetchAllCustomers()

  //   console.log(response)
  // }

  // async function handleCustomerById() {
  //   const docId = '2bea016c-fb1c-4e68-960c-d8406975fc17'

  //   const response = await window.api.fetchCustomerById(docId)

  //   console.log(response)
  // }

  // async function deleteCustomerById() {
  //   const docId = 'af68ab77-0d44-4771-a254-be35a43f1bbe'

  //   const response = await window.api.deleteCustomerById(docId)

  //   console.log(response)
  // }

  const { data } = useQuery({
    queryKey: ['customers'],
    queryFn: async () => {
      const response = await window.api.fetchAllCustomers()

      return response
    }
  })

  return (
    <div className="flex-1 flex flex-col py-12 text-white overflow-y-auto">
      <div className="px-10">
        <h1 className="text-white text-xl font-semibold mb-4 lg:text-3xl">Todos clientes</h1>
      </div>

      <section className="flex flex-col w-full h-screen gap-6 px-10">
        {data?.map((customer) => (
          <Link
            to={`/customer/${customer._id}`}
            key={customer._id}
            className="bg-gray-800 px-4 py-3 rounded"
          >
            <p className="mb-2 font-semibold text-lg">{customer.name}</p>

            <p>
              <span className="font-semibold">Email: </span>
              {customer.email}
            </p>

            {customer.phone && (
              <p>
                <span className="font-semibold">Telefone: </span>
                {customer.phone}
              </p>
            )}
          </Link>
        ))}
      </section>
    </div>
  )
}
