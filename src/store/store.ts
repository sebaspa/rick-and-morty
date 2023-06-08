import { configureStore } from '@reduxjs/toolkit'
import { characterSlice } from './slices/character'
import { charactersApi, locationsApi } from './apis'

export const store = configureStore({
  reducer: {
    character: characterSlice.reducer,
    [charactersApi.reducerPath]: charactersApi.reducer,
    [locationsApi.reducerPath]: locationsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
      .concat(charactersApi.middleware)
      .concat(locationsApi.middleware)
  // devTools: process.env.NODE_ENV !== 'production'
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
