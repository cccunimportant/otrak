var gps = module.exports = {
  isStart: false
}

gps.start = function () {
  this.isStart = true
}

gps.stop = function () {
  this.isStart = false
}

gps.getCurrentLocation = function () {
  throw Error('gps.getCurrentLocaiton() not implemented !')
}

gps.distance = function (a, b) {
  let dx = a.lng - b.lng
  let dy = a.lat - b.lat
  return Math.sqrt(dx * dx + dy * dy)
}
