import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { type ICharacter, type IResultApi } from '../../types'

export const charactersApi = createApi({
  reducerPath: 'characters',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_RICK_MORTY_API
  }),
  /**
   * Creates an object with various endpoint functions to query the API.
   *
   * @param {Function} builder - A function to build the endpoint object.
   * @returns {Object} An object with various endpoint functions.
   */
  endpoints: (builder) => ({
    getPaginatedCharacters: builder.query<IResultApi, { page: number }>({
      query: ({ page }) => `/character/?page=${page}`,
      keepUnusedDataFor: 300
    }),
    getCharacterById: builder.query<ICharacter, string>({
      query: (id) => `/character/${id}`,
      keepUnusedDataFor: 300
    })

  })
})

export const { useGetPaginatedCharactersQuery, useGetCharacterByIdQuery } = charactersApi
