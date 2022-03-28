import { open } from 'sqlite'
import sqlite3 from 'sqlite3'

export const openDB = () => open({
  filename: './database.db',
  driver: sqlite3.Database
})

const db = [
  {'1': { Name: 'cliente 1', Idade: 20, email: 'lalala@gmail.com'}}
]
