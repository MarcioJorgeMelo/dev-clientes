import { Link } from 'react-router-dom'

export function Home() {
  async function handleAdd() {
    const response = await window.api.fetchAllCustomers()

    console.log(response)
  }

  async function handleCustomerById() {
    const docId = '2bea016c-fb1c-4e68-960c-d8406975fc17'

    const response = await window.api.fetchCustomerById(docId)

    console.log(response)
  }

  return (
    <div>
      <h1>Página home</h1>

      <Link to="/create">Ir para create</Link>
      <br />
      <br />

      <button onClick={handleAdd}>Buscar usuários</button>

      <br />

      <button onClick={handleCustomerById}>Buscar usuário pelo Id</button>
    </div>
  )
}
