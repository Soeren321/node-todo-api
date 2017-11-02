const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server')

  //Delete Many
 /* db.collection('Todos').deleteMany({text: 'Something to do'}).then((result) => {
    console.log(result)
  })
*/

 //Delete one
  /* db.collection('Todos').deleteOne({text: 'Something to do'}).then((result) => {
    console.log(result)
  }) */

  // findOneAndDelete
  /* db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    console.log(result)
  }) */

  // Delete many by name
  db.collection('Users').deleteMany({name: 'Sören Brockmann'}).then((result) => {
    console.log(result)
  })

  // Delete one by id
  db.collection('Users').findOneAndDelete({_id: new ObjectID('59fb21a1928d1712c0323fb7')}).then((result) => {
    console.log(JSON.stringify(result, undefined, 2))
  })

 //  db.close()
})