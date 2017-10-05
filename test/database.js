var DB = module.exports = {}

DB.userList = [
  {username: 'ccc', password: '1234567'},
  {username: 'snoopy', password: '7654321'}
]

DB.getUserByName = function (username) {
  return DB.userList.find((user) => user.username === username)
}
