import { createSlice } from '@reduxjs/toolkit'
import { type ICharacter } from '../../../types/characters'

interface CharacterState {
  favoriteCharacters: ICharacter[]
}

const initialState: CharacterState = {
  favoriteCharacters: []
}

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    addFavoriteCharacter: (state, action) => {
      const character = state.favoriteCharacters.find(
        (character) => character.id === action.payload.id
      )
      if (character == null) {
        state.favoriteCharacters.push(action.payload)
      }
    }
  }
})

export const { addFavoriteCharacter } = characterSlice.actions
