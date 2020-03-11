# Test - In8
> Projeto criado para o processo seletivo da empresa In8.
> Simulação backend do sistema de uma biblioteca

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:3001
npm run local

# serve for production
npm run start
```
## Endpoint
``` bash
# Base URL
http://localhost:3001/api/v1

# Get Books
Metodo: GET
http://localhost:3001/api/v1/book

# Post Book
Metodo: POST
http://localhost:3001/api/v1/book
data: {
  titulo: String,
  autor: String,
  edicao: String
}

# Put Book
Metodo: PUT
http://localhost:3001/api/v1/book/:id
Parametro id: Referece ao id do objeto a ser editado
data: {
  titulo: String,
  autor: String,
  edicao: String
}

# Delete Book
Metodo: DELETE
http://localhost:3001/api/v1/book/:id
Parametro id: Referece ao id do objeto a ser deletado
```