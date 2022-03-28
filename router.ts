import { Router } from "express"
import { userController } from './src/modules/user'
import { db } from './src/model/configdb'

export const router = Router()
router.use("/service", userController)

const express = require ('express')
const routes = express.Router()


// buscar dados
routes.get('/', (req, res) => {
  return res.json(db)
})

// inserir dados
routes.post('/add', (req, res) => {
  const body = req.body

  if (!body)
  return res.status(400).end()

  db.push(body)
  return res.json(body)
})

module.exports = routes