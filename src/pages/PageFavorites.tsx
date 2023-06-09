import { useSelector } from 'react-redux'
import { type RootState } from '../store'
import { Characters } from '../components'

/**
 * Renders a page displaying the user's favorite characters.
 *
 * @return {JSX.Element} The JSX element containing the favorite characters.
 */
export const PageFavorites = (): JSX.Element => {
  const favorites = useSelector((state: RootState) => state.character.favoriteCharacters)
  return (
    <>
    <Characters characters={favorites} />
    </>
  )
}
