import express, { json } from 'express'
import cors from 'express'

const server = express()
server.use(json())
server.use(cors())

server.listen(5000, () => {
    console.log("SERVER IS FUN ON PORT 5000!");
})
