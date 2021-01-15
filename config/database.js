const Sequelize=require('sequelize')
module.exports=new Sequelize('todoDb','postgres','123',{
    host:'localhost',
    port:4000,
    dialect:'postgres',
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }
})