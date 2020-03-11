import { findBookById, updateBook, findBookByData } from '../api/book-api'

const putBook = async (req, res) => {
  try {
    const { id } = req.params
    const data = req.body

    const book = await findBookById(id)
    if (!book) return res.status(409).json({ message: 'Livro não encontrado' })

    const existBook = await findBookByData(data, id)
    if (existBook) return res.status(409).json({ message: 'Livro já cadastrado' })

    await updateBook(id, data)

    res.status(200).json({ message: 'Livro atualizado com sucesso' })
  } catch (error) {
    console.log(error)
    res.status(409).json({ message: 'Falha ao atualizar o livro' })
  }
}

export {
  putBook
}
