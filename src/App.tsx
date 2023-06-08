import { Routes, Route } from 'react-router-dom'
import { PageCharacter, PageCharacters } from './pages'

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
        <Route path="/character/:id" element={<PageCharacter /> } />
      </Routes>
    </>
  )
}
