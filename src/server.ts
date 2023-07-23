import fastify from 'fastify'
import { knex } from './database'

const app = fastify()

app.get('/hello', async (request, reply) => {
  const tables = knex('sqlite_schema').select('*')

  return tables
})

app.post('/', async (request, reply) => {
  return { hello: 'world' }
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Server is running on port 3333')
  })
