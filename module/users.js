
const { Sequelize } = require('sequelize')
const db = require('./db')

const user = db.define('user', {
    id: {
        type: Sequelize.STRING,
        autoIncrement: true,
        primaryKey: true, 
    },
  Email:{
    type: Sequelize.STRING,
    defaultValue: 'email@dom.com'
  },
  Login : {
    type: Sequelize.STRING,
    defaultValue: 'login'
  },
  Senha :{
    type: Sequelize.STRING,
    defaultValue: 'senha'
  }
})

module.exports = user;