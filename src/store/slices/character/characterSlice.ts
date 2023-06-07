import { createSlice } from '@reduxjs/toolkit'
import { type Character, Gender, Species, Status } from '../../../types/characters'

interface CharacterState {
  character: Character
  lastsCharacters: Character[]
}

const initialState: CharacterState = {
  character: {
    id: 0,
    name: '',
    status: Status.Unknown,
    species: Species.Alien,
    type: '',
    gender: Gender.Unknown,
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
