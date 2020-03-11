export default {
  titulo: {
    type: String,
    required: true
  },
  autor: {
    type: String,
    required: true
  },
  edicao: String,
  status: {
    type: String,
    enum: [ 'active', 'deleted' ],
    default: 'active'
  }
}
