import { Request } from "express"
import { dbConfig } from "../../../.."
import { User } from "./user.entity"

const isEighteen =(age) => {
  if(age >= 18){
    return true
  }
  return false
}

export const createUser = async (req: Request) =>{
  if(!isEighteen(req.body.age)){
    return null
  }
  const user = await dbConfig.getRepository(User).create(req.body)
  const results = await dbConfig.getRepository(User).save(user)
  return results
}
