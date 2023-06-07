import { Character } from '.'
import { type IInfo, type ICharacter } from '../types'
/**
 * Renders the Characters component which displays a div with the text
 * "Characters".
 *
 * @return {JSX.Element} The rendered Characters component.
 */

interface CharachersProps {
  characters: ICharacter[]
  info: IInfo
}

export const Characters: React.FC<CharachersProps> = ({ characters, info }) => {
  return (
    <>
      <h1>Characters</h1>
      <div className="grid grid-cols-12 gap-4">
        {characters.map((character) => (
          <div key={character.id} className="col-span-12 lg:col-span-6">
            <Character character={character} />
          </div>
        ))}
      </div>
      <pre className='hidden'>{JSON.stringify(info, null, 2)}</pre>
    </>
  )
}
