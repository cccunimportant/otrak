var M = module.exports = {}

var ccc = {username: 'ccc', password: '1234567'}
var snoopy = {username: 'snoopy', password: '7654321'}

var userMap = {
  'ccc': ccc,
  'snoopy': snoopy
}

M.login = function (username, password) {
  var user = userMap[username]
  if (typeof user !== 'undefined' && user.password === password) {
    return user
  }
}

// var user1 = M.login('ccc', '1111')
// console.log('user1=%j', user1)
// var user2 = M.login('ccc', '1234567')
// console.log('user2=%j', user2)
