import { openDB } from '../configdb.js'

export const createTables = () =>{
  openDB().then((db) =>{
    db.exec("CREATE TABLE IF NOT EXISTS User (id INTEGER PRIMARY KEY, idade INTEGER, name TEXT, email TEXT)")
  })
}