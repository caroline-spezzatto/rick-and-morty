import { gql } from '@apollo/client'

export const GET_LOCATIONS = gql`
  query Locations($page: Int) {
    locations(page: $page) {
      results {
        name
        type
        dimension
        residents {
          id
          name
        }
      }
    }
  }
`
