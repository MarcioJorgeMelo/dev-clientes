import { Link } from 'react-router-dom'

export function Home() {
  async function handleAdd() {
    const response = await window.api.fetchUsers()

    console.log(response)
  }

  return (
    <div>
      <h1>Página home</h1>

      <Link to="/create">Ir para create</Link>
      <br />
      <br />

      <button onClick={handleAdd}>Buscar usuários</button>
    </div>
  )
}
