[{

}]

//add user(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

// class Person {
//   constructor (name = 'Admin', age = 29) {
//     // console.log(name , age )
//     this.name = name,
//     this.age = age
//   }
//   getUserDescription () {
//     return `${this.name} is ${this.age} year(S) old`
//   }
// }


class Users {
  constructor () {
    this.users = []
  }
  addUser (id, name, room) {
    var user = {id, name, room}
    this.users.push(user)
    return user
  }
  removeUser (id) {
     var user = this.getUser(id)

     if (user) {
      this.users = this.users.filter((user) => user.id !== id)
     }

     return user
    // return user to be removed or that was removed
  }
  getUser (id) {
    return this.users.filter((user) => user.id === id)[0]
  }
  getUserList (room) {
    var users = this.users.filter((user) => user.room === room)
    var namesArray = users.map((user) => user.name)

    return namesArray
  }
}

module.exports = {Users}


// var me = new Person('Adeshina', 23)
// var taiwo = new Person()

// // console.log('this.name', me.name)
// // console.log('this.name', taiwo.name)

// console.log(me.getUserDescription())
// console.log(taiwo.getUserDescription())