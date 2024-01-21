const { error } = require("console");
const db = require("./db");
const customer = db.customer;

function createcustomer(req,res){
if(!req.body.name || !req.body.email || !req.body.age){
    return res.status(400).send({
        message:"bad data"
    })
}
const cust = {
    name:req.body.name,
    email:req.body.email,
    age:req.body.age
}

customer.create(cust).then(data=>{
    res.send(data);
}).catch(error=>{
res.send(error)
})
}

function findall(req,res){
customer.findAll().then(data=>{
    res.send(data);
}).catch(error=>{
    res.send(error)
})
}

function findbyemail(req,res){
customer.findByPk(req.params.email).then(data=>{
    res.send(data);
}).catch(error=>{
    res.send(error);
})
}

function update(req,res){
const newdata = {
    name:req.body.name,
    email:req.body.email,
    age:req.body.age
}
customer.update(newdata,{where:{email:req.body.email}}).then(data=>{
    res.send("update succes");
}).catch(error=>{
    res.send(error)
})
}

function deleted (req,res){
    customer.destroy({
        where:{
            email:req.params.email
        }
    }).then(data=>{
        res.send("deleted succesfully")
    }).catch(error=>{
        res.send(error)
    })
}

module.exports = {
    createcustomer,
    findall,
    findbyemail,
    update,
    deleted
}