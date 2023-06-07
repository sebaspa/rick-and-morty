import { createSlice } from "@reduxjs/toolkit";

interface Character {
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface CharacterState {
  character: Character;
  lastsCharacters: Character[];
}

const initialState: CharacterState = {
  character: {
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
    origin: {
      name: "",
      url: "",
    },
    location: {
      name: "",
      url: "",
    },
    image: "",
    episode: [],
    url: "",
    created: "",
  },
  lastsCharacters: [],
};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {},
})

