import { findBookById, updateBook } from '../api/book-api'

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params

    const book = await findBookById(id)
    if (!book) return res.status(409).json({ message: 'Livro não encontrado' })

    await updateBook(id, { status: 'deleted' })
    res.status(200).json({ message: 'Livro deletado com sucesso' })
  } catch (error) {
    res.status(409).json({ message: 'Falha ao deletar o livro' })
  }
}

export {
  deleteBook
}
