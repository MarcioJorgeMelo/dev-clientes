import { Outlet } from 'react-router-dom'
import { Header } from '../header'

export function Layout() {
  return (
    <>
      <div className="flex-1 flex flex-col max-w-screen">
        <Header />

        <Outlet />
      </div>
    </>
  )
}
