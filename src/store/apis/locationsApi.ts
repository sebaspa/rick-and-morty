import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { type ILocationDetail } from '../../types'

export const locationsApi = createApi({
  reducerPath: 'locations',
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
    getLocationById: builder.query<ILocationDetail, { id: number }>({
      query: ({ id }) => `/location/${id}`,
      keepUnusedDataFor: 300
    })
  })
})

export const { useGetLocationByIdQuery } = locationsApi
