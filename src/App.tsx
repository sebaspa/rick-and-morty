import { Routes, Route } from 'react-router-dom'
import { PageCharacter, PageCharacters } from './pages'
import { MainLayout } from './layouts'

/**
 * React functional component for rendering the App.
 *
 * @return {React.FC} Returns a React functional component.
 */
export const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route element={<PageCharacters />} index />
          <Route path="/character/:id" element={<PageCharacter />} />
        </Route>
      </Routes>
    </>
  )
}
