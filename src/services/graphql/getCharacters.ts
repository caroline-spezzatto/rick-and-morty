import { gql } from '@apollo/client'

export const GET_CHARACTERS = gql`
  query Characters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      results {
        id
        name
        image
        gender
        status
        species
        origin {
          name
        }
        episode {
          id
        }
      }
    }
  }
`
