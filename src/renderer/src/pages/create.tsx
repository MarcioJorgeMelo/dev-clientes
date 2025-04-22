export function Create() {
  async function handleAddCustomer() {
    const doc = {
      name: 'Matheus Fraga',
      email: 'teste@teste.com',
      phone: '6798888888',
      address: 'Rua frontend, centro',
      role: 'Frontend',
      status: true
    }

    const response = await window.api.addCustomer(doc)

    console.log(response)
  }

  return (
    <div>
      <h1>Página create</h1>

      <button onClick={handleAddCustomer}>Cadastrar</button>
    </div>
  )
}
