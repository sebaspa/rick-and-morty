import { Routes, Route } from 'react-router-dom'
import { PageCharacters } from './pages'

export const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageCharacters /> } index />
      </Routes>
    </>
  )
}
