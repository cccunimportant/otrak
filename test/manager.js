var M = module.exports = {
  db: require('./database')
}

M.login = function (username, password) {
  var user = M.db.getUserByName(username)
  if (typeof user !== 'undefined' && user.password === password) {
    return user
  }
}

// var user1 = M.login('ccc', '1111')
// console.log('user1=%j', user1)
// var user2 = M.login('ccc', '1234567')
// console.log('user2=%j', user2)
