import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div>
      <h1>Página home</h1>

      <Link to="/create">Ir para create</Link>
    </div>
  )
}
