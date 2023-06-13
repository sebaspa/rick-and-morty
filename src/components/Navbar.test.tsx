// Test for NavBar.tsx
import { cleanup } from '@testing-library/react'
import { describe, it, afterEach, expect } from 'vitest'

import { Navbar } from '.'

describe('Navbar', () => {
  afterEach(cleanup)

  it('should be defined', () => {
    expect(Navbar).toBeDefined()
  })
})
