import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { type ResultApi } from '../../types'

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
    getPaginatedCharacters: builder.query<ResultApi, { page: number }>({
      query: ({ page }) => `/character/?page=${page}`
    })
  })
})

export const { useGetPaginatedCharactersQuery } = charactersApi
