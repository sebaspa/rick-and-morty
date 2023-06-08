import { useParams } from 'react-router-dom'
import { useGetCharacterByIdQuery } from '../store/apis'

export const PageCharacter = (): JSX.Element => {
  const { id = '1' } = useParams()
  const { data, isLoading } = useGetCharacterByIdQuery(id)
  return (
    <div className="container mx-auto px-4">
      {isLoading && <p>Loading...</p>}
      {data != null && (
        <>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-3">
              <img src={data.image} alt={data.name} />
            </div>
            <div className="col-span-12 lg:col-span-9">
              <h1>{data.name}</h1>
              <p>{data.status}</p>
              <p>{data.species}</p>
              <p>{data.type}</p>
              <p>{data.gender}</p>
            </div>
          </div>
        </>
      )}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
