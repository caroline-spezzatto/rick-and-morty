import { setupWorker } from 'msw'
import getSeasonsMock from './handlers/getSeasonsMock'
import getLocationsMock from './handlers/getLocationsMock'
import getCharactersMock from './handlers/getCharactersMock'

const handlers = [...getCharactersMock, ...getSeasonsMock, ...getLocationsMock]

export const worker = setupWorker(...handlers)
