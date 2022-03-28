import express from 'express'
import { createTables } from '../../../model/configdb'


const app = express()

createTables();

