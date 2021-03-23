/*
 * Generated by orval v4.2.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import {
  rest
} from 'msw'
import faker from 'faker'

export const getSwaggerPetstoreMSW = () => [
rest.get('*/v:version/pets', (req, res, ctx) => {
      return res(
        ctx.delay(1000),
        ctx.status(200, 'Mocked status'),
ctx.json([...Array(faker.random.number({min: 1, max: 10}))].map(() => ({id: (() => faker.random.number({ min: 1, max: 99999 }))(), name: (() => faker.name.lastName())(), tag: (() => faker.name.lastName())()}))),
      )
    }),rest.post('*/v:version/pets', (req, res, ctx) => {
      return res(
        ctx.delay(1000),
        ctx.status(200, 'Mocked status'),
      )
    }),rest.get('*/v:version/pets/:petId', (req, res, ctx) => {
      return res(
        ctx.delay(1000),
        ctx.status(200, 'Mocked status'),
ctx.json((() => ({
                id: faker.random.number({ min: 1, max: 99 }),
                name: faker.name.firstName(),
                tag: faker.helpers.randomize([faker.random.word(), undefined]),
              }))()),
      )
    }),]
