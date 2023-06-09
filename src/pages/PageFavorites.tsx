import { useSelector } from 'react-redux'
import { type RootState } from '../store'
import { Characters } from '../components'

/**
 * Renders a page displaying the user's favorite characters.
 *
 * @return {JSX.Element} The JSX element containing the favorite characters.
 */
export const PageFavorites = (): JSX.Element => {
  const favorites = useSelector(
    (state: RootState) => state.character.favoriteCharacters
  )
  return (
    <>
      {favorites.length === 0
        ? (
        <>
          <h1 className='text-2xl'>No hay personajes favoritos.</h1>
        </>
          )
        : (
        <Characters characters={favorites.slice(-5)} />
          )}
    </>
  )
}
