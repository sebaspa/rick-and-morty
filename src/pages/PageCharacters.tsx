import { useState } from 'react'
import { Characters, Paginate } from '../components'
import { useGetPaginatedCharactersQuery } from '../store/apis'
import { SkeletonCharacters } from '../components/skeletons'

/**
 * Returns a JSX element that displays paginated character data.
 *
 * @return {JSX.Element} A JSX element that displays paginated character data.
 */
export const PageCharacters = (): JSX.Element => {
  const [page, setPage] = useState(1)
  const { data, isLoading } = useGetPaginatedCharactersQuery({ page })

  const nextPage = (): void => {
    if (data != null) {
      if (page >= data.info.pages) return
      setPage(page + 1)
    }
  }
  const prevPage = (): void => {
    if (page === 1) return
    setPage(page - 1)
  }

  return (
    <div className="container mx-auto px-4">
      {isLoading && <SkeletonCharacters items={10} />}
      {data != null && (
        <>
          <Characters characters={data.results} />
          <Paginate onNextPage={nextPage} onPrevPage={prevPage} page={page} itemsCount={data.results.length} itemsTotal={data.info.count} />
        </>
      )}
    </div>
  )
}
