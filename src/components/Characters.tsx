import { type Info, type Character } from '../types'
/**
 * Renders the Characters component which displays a div with the text
 * "Characters".
 *
 * @return {JSX.Element} The rendered Characters component.
 */

interface CharachersProps {
  characters: Character[]
  info: Info
}

export const Characters: React.FC<CharachersProps> = ({ characters, info }) => {
  return (
    <>
      <h1>Characters</h1>
      <div className="grid grid-cols-12 gap-4">
        {characters.map((character) => (
          <div key={character.id} className="col-span-12 md:col-span-4 lg:col-span-3">
            {character.name}
          </div>
        ))}
      </div>
      <pre>{JSON.stringify(info, null, 2)}</pre>
    </>
  )
}
