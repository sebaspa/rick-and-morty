import { EGender, ESpecies, EStatus } from '../types'

export const charactersData = [
  {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth',
      url: 'https://rickandmortyapi.com/api/location/1'
    },
    location: {
      name: 'Earth',
      url: 'https://rickandmortyapi.com/api/location/20'
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    episode: [
      'https://rickandmortyapi.com/api/episode/1',
      'https://rickandmortyapi.com/api/episode/2'
    ],
    url: 'https://rickandmortyapi.com/api/character/1',
    created: '2017-11-04T18:48:46.250Z'
  },
  {
    id: 2,
    name: 'Morty Smith',
    status: EStatus.Alive,
    species: ESpecies.Human,
    type: '',
    gender: EGender.Male,
    origin: {
      name: 'Earth',
      url: 'https://rickandmortyapi.com/api/location/1'
    },
    location: {
      name: 'Earth',
      url: 'https://rickandmortyapi.com/api/location/20'
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    episode: [
      'https://rickandmortyapi.com/api/episode/1',
      'https://rickandmortyapi.com/api/episode/2'
    ],
    url: 'https://rickandmortyapi.com/api/character/2',
    created: new Date('2017-11-04T18:50:21.651Z')
  }
]
