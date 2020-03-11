import BookSchema from '../models/schema'

const findBooks = async () => {
  const books = await BookSchema.find({ status: { $ne: 'deleted' } }).sort('titulo')

  return books
}

const findBookById = async (id) => {
  const book = await BookSchema.findById(id)

  return book
}

const findBookByData = async (data, _id) => {
  const filter = _id ? { _id: { $ne: _id } } : {}
  const book = await BookSchema.findOne({ ...data, status: { $ne: 'deleted' }, ...filter })

  return book
}

const saveBook = async (data) => {
  await BookSchema(data).save()
}

const updateBook = async (_id, data) => {
  await BookSchema.updateOne({ _id }, { $set: data })
}

export { findBooks, findBookById, findBookByData, saveBook, updateBook }
