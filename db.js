const Sequelize = require("sequelize");
const dbname = "customer";
const dbuser = "root";
const dbpassword = "pratham";


const sequelize = new Sequelize(dbname,dbuser,dbpassword,{
    host:"localhost",
    port:"3306",
    dialect:"mysql"
});

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.customer = require("./model")(sequelize,Sequelize);

module.exports = db;
