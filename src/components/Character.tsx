import { type ICharacter } from '../types'

interface CharacterProps {
  character: ICharacter
}

export const Character: React.FC<CharacterProps> = ({ character }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 bg-gray-500 rounded-2xl">
      <div className="w-full h-60 sm:w-48 sm:h-48 bg-gray-400 rounded-tl-2xl rounded-tr-2xl sm:rounded-tr-none sm:rounded-bl-2xl shrink-0">
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-60 sm:w-48 sm:h-48 object-cover rounded-tl-2xl rounded-tr-2xl sm:rounded-tr-none sm:rounded-bl-2xl"
        />
      </div>
      <div className="py-4 px-4 sm:px-0">
        <h2 className="text-3xl text-white font-bold mb-2">{character.name}</h2>
        <div className="flex gap-3 items-center">
          <div
            className={`w-3 h-3 rounded-full ${
              character.status === 'Alive' ? 'bg-green-500' : 'bg-red-500'
            }`}
          ></div>
          <p className="text-white">
            {character.status} - {character.species}
          </p>
        </div>
      </div>
    </div>
  )
}
