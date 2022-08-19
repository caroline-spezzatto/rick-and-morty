export type LocationsResponse = {
  locations: {
    results: [
      {
        id: string
        name: string
        type: string
        dimension: string
        residents: [
          {
            id: string
            name: string
          }
        ]
      }
    ]
  }
}
