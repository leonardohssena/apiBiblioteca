import { findBooks } from '../api/book-api'

const getBooks = async (req, res) => {
  try {
    const books = await findBooks()
    res.status(200).json({ books })
  } catch (error) {
    res.status(409).json({
      message: 'Falha ao buscar os livros'
    })
  }
}

export {
  getBooks
}
