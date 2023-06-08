import { Character } from '.'
import { type ICharacter } from '../types'
/**
 * Renders the Characters component which displays a div with the text
 * "Characters".
 *
 * @return {JSX.Element} The rendered Characters component.
 */

interface CharachersProps {
  characters: ICharacter[]
}

/**
 * Renders a list of characters using the provided character data.
 *
 * @param {CharachersProps} characters - An array of character objects to be rendered.
 * @return {JSX.Element} A React element representing the list of characters.
 */
export const Characters: React.FC<CharachersProps> = ({
  characters
}) => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        {characters.map((character) => (
          <div key={character.id} className="col-span-12 lg:col-span-6">
            <Character character={character} />
          </div>
        ))}
      </div>
    </>
  )
}
