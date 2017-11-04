const {ObjectID} = require('mongodb')
const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

Todo.remove({}).then((result) => {
  console.log(result)
})

// Todo.findByIdAndRemove()

/* Todo.findOneAndRemove({_id: '59fcc56e3dcf8f498b2b5286'}).then((todo) => {
  console.log(todo)
}) */

Todo.findByIdAndRemove('59fcc56e3dcf8f498b2b5286').then((todo) => {
  console.log(todo)
})