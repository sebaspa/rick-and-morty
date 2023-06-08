import { Routes, Route } from 'react-router-dom'
import { PageCharacters } from './pages'

/**
 * React functional component for rendering the App.
 *
 * @return {React.FC} Returns a React functional component.
 */
export const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageCharacters /> } index />
      </Routes>
    </>
  )
}
