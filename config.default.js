var join = require('path').join
var pack = require('./package')

var IS_PRODUCTION = process.env.NODE_ENV === 'production'

function get (name, defaultValue) {
  return process.env['PLWS_' + name.toUpperCase()] || defaultValue
}

var config = {
  appURI: '/app',
  appVersion: pack.version,
  enableLogger: process.env.NODE_ENV !== 'test',
  errorPages: IS_PRODUCTION,
  hostname: get('hostname', '127.0.0.1'),
  ip: get('IP', '127.0.0.1'),
  port: get('port', 9000),
  staticDir: join(__dirname, '../static'),
  titleSuffix: ' | Peter Lyons',
  revealDir: join(__dirname, 'node_modules/reveal'),
  wwwDir: join(__dirname, 'www'),
  zeroClipboardDir: join(__dirname, 'node_modules/zeroclipboard/dist')
}

config.analytics = {
  enabled: IS_PRODUCTION,
  code: ''
}

config.photos = {
  photoURI: '/photos/',
  galleryURI: config.appURI + '/photos-react',
  galleryDir: config.staticDir + '/photos',
  thumbExtension: '-TN.jpg',
  extension: '.jpg',
  galleryDataPath: join(__dirname, '../data/galleries.json'),
  serveDirect: !IS_PRODUCTION
}

config.blog = {
  hashPath: join(__dirname, '../data/blog_password.bcrypt'),
  postBasePath: join(__dirname, '../data/posts'),
  newBlogPreparePath: join(__dirname, 'bin/new_blog_prepare.sh'),
  newBlogFinalizePath: join(__dirname, 'bin/new_blog_finalize.sh')
}

config.inspector = {
  enabled: !IS_PRODUCTION,
  webPort: config.port + 2
}

config.tests = {
  port: get('testPort', 9002),
  debugPort: get('testDebugPort', 9004),
  mochaPath: join(__dirname, 'node_modules/mocha')
}

config.baseURL = 'http://' + config.hostname + ':' + config.port
module.exports = config
