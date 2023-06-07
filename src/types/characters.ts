export interface IInfo {
  count: number
  pages: number
  next: string
  prev: null
}

export interface ICharacter {
  id: number
  name: string
  status: EStatus
  species: ESpecies
  type: string
  gender: EGender
  origin: ILocation
  location: ILocation
  image: string
  episode: string[]
  url: string
  created: Date
}

export enum EGender {
  Female = 'Female',
  Male = 'Male',
  Unknown = 'unknown',
}

export interface ILocation {
  name: string
  url: string
}

export enum ESpecies {
  Alien = 'Alien',
  Human = 'Human',
}

export enum EStatus {
  Alive = 'Alive',
  Dead = 'Dead',
  Unknown = 'unknown',
}

export interface IResultApi {
  info: IInfo
  results: ICharacter[]
}
