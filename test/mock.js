var M = module.exports = require('../lib/model')

var db = M.db
var gps = M.gps

db.userList = [
  {username: 'ccc', password: '1234567'},
  {username: 'snoopy', password: '7654321'}
]

db.getUserByName = function (username) {
  return db.userList.find((user) => user.username === username)
}

db.addUser = function (user) {
  if (db.getUserByName(user.username) != null) return
  db.userList.push(user)
  return user
}

db.objList = require('./objList.json')

db.queryObjects = function (filter) {
  var objects = db.objList.filter(function (o) {
    if (filter.type != null && o.type !== filter.type) return false
    if (filter.owner != null && o.owner !== filter.owner) return false
    if (filter.distance != null && gps.distance(o.location, filter.location) > filter.distance) return false
    return true
  })
//  console.log('objects = %j', objects)
  return objects
}

gps.getCurrentLocation = function () {
  return {lat: 24.452, lng: 118.333}
}
