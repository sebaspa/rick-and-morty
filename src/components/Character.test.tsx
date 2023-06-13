// https://vitejs.dev/guide/api-plugin.html#test
import { render, cleanup } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { charactersData } from '../mocks/character'

import { type ICharacter } from '../types'

import { Character } from '.'

const characterData = charactersData[1] as ICharacter

describe('Character', () => {
  afterEach(cleanup)

  it('should be defined', () => {
    expect(Character).toBeDefined()
  })

  it('should render', () => {
    render(<Character character={characterData} />)
  })

  it('should match snapshot', () => {
    const { asFragment } = render(<Character character={characterData} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
