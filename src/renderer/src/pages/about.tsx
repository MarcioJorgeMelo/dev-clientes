import { useQuery } from '@tanstack/react-query'

export function About() {
  const { data, isFetching } = useQuery({
    queryKey: ['version-app'],
    queryFn: async () => {
      const response = await window.api.getVersionApp()

      return response
    }
  })

  return (
    <div className="flex-1 flex flex-col py-12 px-10 text-white">
      <h1 className="font-semibold text-xl lg:text-3xl">Página sobre</h1>

      <p>
        Projeto criado no curso <b>@Sujeitoprogramador</b>
      </p>
      <p>Versão atual do projeto: {!isFetching && data && data}</p>
    </div>
  )
}
