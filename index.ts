import 'reflect-metadata'
import express, { Request, Response} from 'express'
import { DataSource } from "typeorm"
import { Router } from 'express'

const PORT = 5000;

const app = express()
app.use(express.json())
app.use(Router)

app.get ('/', (req: Request, res: Response) => res.send('our server is working! 😍'))

export const dbConfig = new DataSource({
  type: "sqlite",
  database: "./src/database.db",
  entities: [__dirname + '/../**/*.entity.js'],
  logging: true,
  synchronize: true
})

dbConfig.initialize()
  .then(() => {
    console.log('connected to database 👍')
    app.listen(PORT, () => console.log(`💻 server running on port ${PORT} 💻`))
  })
  .catch (() => console.log('failed to connect to the database 😥'))

  console.log('shutting down server 👋')
  
  




