import { useState } from 'react'
import { Characters, Paginate } from '../components'
import { useGetPaginatedCharactersQuery } from '../store/apis'
import { SkeletonCharacters } from '../components/skeletons'
import { SearchCharacter } from '.'
import { useDebounce } from '../hooks'

/**
 * Returns a JSX element that displays paginated character data.
 *
 * @return {JSX.Element} A JSX element that displays paginated character data.
 */
export const PageCharacters = (): JSX.Element => {
  const [page, setPage] = useState(1)
  const [name, setName] = useState('')
  const debouncedSearchQuery = useDebounce(name, 500)
  const { data, isLoading } = useGetPaginatedCharactersQuery({ page, name: debouncedSearchQuery }, { skip: debouncedSearchQuery === ' ' })

  const nextPage = (): void => {
    if (data !== undefined) {
      if (page >= data.info.pages) return
      setPage(page + 1)
    }
  }
  const prevPage = (): void => {
    if (page === 1) return
    setPage(page - 1)
  }

  const changeNameValue = (name: string): void => {
    setPage(1)
    setName(name)
  }

  return (
    <>
      <SearchCharacter onChangeVal={changeNameValue} name={name} />
      {isLoading && <SkeletonCharacters items={10} />}
      {data !== undefined && (
        <>
          <Characters characters={data.results} />
          <Paginate
            onNextPage={nextPage}
            onPrevPage={prevPage}
            page={page}
            itemsCount={data.results.length}
            itemsTotal={data.info.count}
          />
        </>
      )}
    </>
  )
}
