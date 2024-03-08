import { gql } from '@apollo/client'

export const GET_EPISODES = gql`
  query Episodes($filter: FilterEpisode) {
    episodes(filter: $filter) {
      results {
        id
        name
        episode
        air_date
      }
    }
  }
`
