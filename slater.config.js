const path = require('path')

module.exports = {
  themes: {
    development: {
      id: '80570089534',
      password: '2d6fca23dd336231eee82f73c19a393c',
      store: 'casadenim.myshopify.com/',
      ignore: [
        'settings_data.json' // leave this here to avoid overriding theme settings on sync
      ]
    }
  }
}