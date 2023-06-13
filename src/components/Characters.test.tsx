// Test for Characters.tsx

import { render, cleanup } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { Characters } from '.'
import { charactersData } from '../mocks/character'
import { type ICharacter } from '../types'

describe('Characters', () => {
  afterEach(cleanup)

  it('should be defined', () => {
    expect(Characters).toBeDefined()
  })

  it('should match snapshot', () => {
    const { asFragment } = render(<Characters characters={charactersData as ICharacter[]} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
