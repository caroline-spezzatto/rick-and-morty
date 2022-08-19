import { graphql } from 'msw'
import { locationsMock } from '../locationsMock'

export const getLocationsMock = [
  graphql.query('Locations', (req, res, ctx) => {
    return res(ctx.data(locationsMock))
  })
]

export default getLocationsMock
