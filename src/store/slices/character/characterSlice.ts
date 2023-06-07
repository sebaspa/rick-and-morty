import { createSlice } from '@reduxjs/toolkit'
import { type ICharacter, EGender, ESpecies, EStatus } from '../../../types/characters'

interface CharacterState {
  character: ICharacter
  lastsCharacters: ICharacter[]
}

const initialState: CharacterState = {
  character: {
    id: 0,
    name: '',
    status: EStatus.Unknown,
    species: ESpecies.Alien,
    type: '',
    gender: EGender.Unknown,
    origin: {
      name: '',
      url: ''
    },
    location: {
      name: '',
      url: ''
    },
    image: '',
    episode: [],
    url: '',
    created: new Date()
  },
  lastsCharacters: []
}

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {}
})
