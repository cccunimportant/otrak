var M = module.exports = {
  db: require('./database'),
  gps: require('./gps')
}

M.login = function (username, password) {
  var user = M.db.getUserByName(username)
  if (typeof user !== 'undefined' && user.password === password) {
    return user
  }
}

M.signup = function (user) {
  return M.db.addUser(user)
}

M.queryObjects = function (filter) {
  return M.db.queryObjects(filter)
}

// var user1 = M.login('ccc', '1111')
// console.log('user1=%j', user1)
// var user2 = M.login('ccc', '1234567')
// console.log('user2=%j', user2)
