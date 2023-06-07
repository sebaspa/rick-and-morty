import { Characters } from '../components'
import { useGetPaginatedCharactersQuery } from '../store/apis'

/**
 * Returns a JSX element that displays paginated character data.
 *
 * @return {JSX.Element} A JSX element that displays paginated character data.
 */
export const PageCharacters = (): JSX.Element => {
  const { data, isLoading } = useGetPaginatedCharactersQuery({ page: 1 })
  return (
    <div className='container mx-auto px-4'>
    { isLoading ? <h1>Loading...</h1> : data !== undefined && <Characters info={data.info} characters={data.results} />}
    </div>
  )
}
