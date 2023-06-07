import { SkeletonCharacter } from '.'

interface SkeletonCharactersProps {
  items: number
}
export const SkeletonCharacters: React.FC<SkeletonCharactersProps> = ({
  items
}) => {
  const itemsArray = [...Array(items).keys()]
  return (
    <div className='grid grid-cols-12 gap-4'>
      {itemsArray.map((item) => (
        <SkeletonCharacter key={item} />
      ))}
    </div>
  )
}
