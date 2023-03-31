import express, { json } from 'express'
import cors from 'express'
import { routes } from './routes.js'

const server = express()
server.use(json())
server.use(cors())
server.use(routes)

server.listen(5000, () => {
    console.log("SERVER IS FUN ON PORT 5000!");
})
