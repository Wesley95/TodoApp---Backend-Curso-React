const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])
Todo.updateOptions({ new: true, runValidators: true })
//new = retornar o valor atualizad após o update
//runValidators = Realiza a validação dos dados no update

module.exports = Todo