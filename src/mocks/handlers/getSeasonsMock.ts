import { graphql } from 'msw'
import { seasonsMock } from '../seasonsMock'

export const getSeasonsMock = [
  graphql.query('Seasons', (req, res, ctx) => {
    return res(ctx.data(seasonsMock))
  })
]

export default getSeasonsMock
