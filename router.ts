import { createUser } from "./src/modules/user/service/user.controller"
import { Router } from "express"



const router = Router()

// buscar dados
router.get('/', (req, res) => {
  return res.json("lalalla")
})

// inserir dados
router.post('/add', async(req, res) => {
  const body = req.body
   
  if(!body){
    return res.status(400).end()
  }
  const user = await createUser(req)
  
  return res.json(user)
})

export default router