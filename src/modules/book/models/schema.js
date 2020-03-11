import { model, Schema } from 'mongoose'
import MODEL from './model'

const name = 'book'

const schema = new Schema(MODEL, {
  timestamps: true
})

const SCHEMA = model(name, schema)

export default SCHEMA
