import { Outlet } from 'react-router-dom'
import { Navbar } from '../components'

export const MainLayout = (): JSX.Element => {
  return (
    <div className='container mx-auto px-4'>
      <Navbar />
      <Outlet />
    </div>
  )
}
