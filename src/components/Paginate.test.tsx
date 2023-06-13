// Testing for Paginate.tsx

import { render, cleanup } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { Paginate } from '.'

const paginateProps = {
  onNextPage: () => {},
  onPrevPage: () => {},
  page: 1,
  itemsCount: 10,
  itemsTotal: 100
}

describe('Paginate', () => {
  afterEach(cleanup)

  it('should match snapshot', () => {
    const { asFragment } = render(<Paginate {...paginateProps} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
