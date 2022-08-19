import { gql } from '@apollo/client'

export const GET_SEASONS = gql`
  query Seasons{
    episodes {
      results {
        id
        name
        episode
        air_date
      }
    }
  }
`
