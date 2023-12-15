const Db = require('sequelize')

const db = new Db('leagueNode', 'root', '', {
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
