import { graphql } from 'msw'
import { charactersMock } from '../charactersMock'

export const getCharactersMock = [
  graphql.query('Characters', (req, res, ctx) => {
    return res(ctx.data(charactersMock))
  })
]

export default getCharactersMock
