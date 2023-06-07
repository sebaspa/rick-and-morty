import { configureStore } from '@reduxjs/toolkit'
import { characterSlice } from './slices/character'
import { charactersApi } from './apis'

export const store = configureStore({
  reducer: {
    character: characterSlice.reducer,
    [charactersApi.reducerPath]: charactersApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(charactersApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
