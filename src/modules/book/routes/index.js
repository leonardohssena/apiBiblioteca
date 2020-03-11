import Router from 'express'

import { getBooks } from './getBook'
import { postBook } from './postBook'
import { putBook } from './putBook'
import { deleteBook } from './deleteBook'

const Routes = Router()

Routes
  .get('/', getBooks)
  .post('/', postBook)
  .put('/:id', putBook)
  .delete('/:id', deleteBook)

export const module = {
  name: 'book',
  route: Routes
}
