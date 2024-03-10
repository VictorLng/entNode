const Db = require('sequelize')

const db = new Db('league_node', 'root', '25352535Lvg@', {
    host: 'localhost',
    dialect: 'mysql'
})
db.authenticate()
    .then(function(response){
        console.log("Conexão ok!!!")
    }).catch(function(err){
        console.error(err)
    })

    
module.exports = db
