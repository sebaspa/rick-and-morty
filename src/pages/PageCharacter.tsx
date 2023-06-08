import { useParams } from 'react-router-dom'
import {
  useGetCharacterByIdQuery,
  useGetLocationByIdQuery
} from '../store/apis'
import { SkeletonCharacterDetail } from '../components/skeletons'

export const PageCharacter = (): JSX.Element => {
  const { id = '1' } = useParams()
  const { data: character, isLoading } = useGetCharacterByIdQuery(id)
  const { data: origin } = useGetLocationByIdQuery(
    character?.origin?.url?.split('/').pop(),
    { skip: !character?.location?.url }
  )
  const { data: location } = useGetLocationByIdQuery(
    character?.location?.url?.split('/').pop(),
    { skip: !character?.location?.url }
  )

  return (
    <>
      {isLoading && <SkeletonCharacterDetail />}
      {character != null && (
        <>
          <h1 className="text-2xl md:text-5xl mb-4 mt-5 font-bold">
            {character.name}
          </h1>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 sm:col-span-6 lg:col-span-2">
              <img
                src={character.image}
                alt={character.name}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-2">
              <h2 className="font-bold text-lg mb-2">Información personal</h2>
              <p><span className='font-bold'>Estado: </span> {character.status}</p>
              <p><span className='font-bold'>Especie: </span> {character.species}</p>
              <p><span className='font-bold'>Tipo: </span> {character.type !== '' ? character.type : '-'}</p>
              <p><span className='font-bold'>Género: </span> {character.gender}</p>
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
              <h2 className="font-bold text-lg mb-2">Origen</h2>
              {character.origin.url !== ''
                ? (
                <>
                  <p><span className='font-bold'>Nombre: </span> {origin?.name !== '' ? origin?.name : '-'}</p>
                  <p><span className='font-bold'>Tipo: </span> {origin?.type}</p>
                  <p><span className='font-bold'>Dimensión: </span> {origin?.dimension}</p>
                </>
                  )
                : (
                <p>No hay información de origen.</p>
                  )}
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
              <h2 className="font-bold text-lg mb-2">Ubicación</h2>
              {character.location.url !== ''
                ? (
                <>
                  <p><span className='font-bold'>Nombre:</span> {location?.name}</p>
                  <p><span className='font-bold'>Tipo:</span> {location?.type}</p>
                  <p><span className='font-bold'>Dimensión:</span> {location?.dimension}</p>
                </>
                  )
                : (
                <p>No hay información de ubicación.</p>
                  )}
            </div>
          </div>
        </>
      )}
    </>
  )
}
