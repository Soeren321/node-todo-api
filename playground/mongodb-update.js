const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server')

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('59fb339b8a545f14cc023052')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result)
  })


  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('59fb338ea342a314ca6a62ac')
  }, {
    $set: {
      name: 'Jan'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result)
  })


  //  db.close()
})

