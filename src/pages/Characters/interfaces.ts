export type CharactersData = {
  id: string
  name: string
  image: string
  gender: string
  status: string
  species: string
  origin: {
    id: string
    name: string
  }
  episode: [
    {
      id: string
      name: string
    }
  ]
}

export type CharactersResponse = {
  characters: {
    results: [CharactersData]
  }
}
