var M = module.exports = {}

var ccc = {id: 'ccc', password: '1234567'}
var snoopy = {id: 'snoopy', password: '7654321'}

var userMap = {
  'ccc': ccc,
  'snoopy': snoopy
}

M.login = function (id, password) {
  var user = userMap[id]
  if (user.password === password) {
    return user
  }
}

var user1 = M.login('ccc', '1111')
console.log('user1=%j', user1)
var user2 = M.login('ccc', '1234567')
console.log('user2=%j', user2)
