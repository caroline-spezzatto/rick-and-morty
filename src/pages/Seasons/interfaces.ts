export type EpisodesResponse = {
  episodes: {
    results: [
      {
        id: string
        name: string
        episode: string
        created: string
        air_date: string
      }
    ]
  }
}
