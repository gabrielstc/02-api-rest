import fastify from 'fastify'
import { knex } from './database'
import { env } from './env'

const app = fastify()

app.get('/hello', async (request, reply) => {
  const transactions = await knex('transactions').select('*')

  return transactions
})

app.post('/', async (request, reply) => {
  return { hello: 'world' }
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('Server is running on port 3333')
  })
