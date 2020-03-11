import { findBookByData, saveBook } from '../api/book-api'

const postBook = async (req, res) => {
  try {
    const data = req.body

    const existBook = await findBookByData(data)
    if (existBook) return res.status(409).json({ message: 'Livro já cadastrado' })

    await saveBook(data)

    res.status(200).json({ message: 'Livro cadastrado com sucesso' })
  } catch (error) {
    res.status(409).json({ message: 'Falha o inserir livro' })
  }
}

export {
  postBook
}
