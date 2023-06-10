interface SearchCharacterProps {
  onChangeVal: (value: string) => void
  name: string
}

export const SearchCharacter: React.FC<SearchCharacterProps> = ({
  onChangeVal,
  name
}) => {
  const handleChangeVal = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChangeVal(e.target.value)
  }
  return (
    <>
      <p className="text-2xl mb-4">Buscar personaje por nombre</p>
      <input
        type="text"
        className="w-full border border-gray-300 rounded-md h-10 px-3 mb-4"
        value={name}
        onChange={handleChangeVal}
      />
    </>
  )
}
