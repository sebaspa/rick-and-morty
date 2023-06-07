import { useGetPaginatedCharactersQuery } from '../store/apis'

/**
 * Renders the Characters component which displays a div with the text
 * "Characters".
 *
 * @return {JSX.Element} The rendered Characters component.
 */
export const Characters = (): JSX.Element => {
  const { data = [], isLoading } = useGetPaginatedCharactersQuery({ page: 1 })
  return (
    <>
      <div>{isLoading ? 'Loading...' : 'Characters'}</div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}
