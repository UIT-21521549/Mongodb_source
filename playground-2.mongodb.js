// Last-name, full - name, number phone, address, type of products

//if not, vscode will create database auto matically 
use('Name database')
//create collection
db.createCollection('Name colection')
//add data
//EX:
db.getCollection('Name collection').insertMany([{
  "_id": {
    "$oid": "647e8507c97b2beb4d919d15"
  },
  "Last name": "Nguyen",
  "full - name": "Nguyen Van A",
  "number phone": 54648498,
  "address": "12 Phan Chau Trinh",
  "type of products": "Tablets"
}])
//funtion find many CTM
db.getCollection('Name Collection').find({"full - name": "Tran Phu"})
//if u want fine one object ctm
db.getCollection('Name Collection').findOne({"full - name": "Tran Phu"})
//sort for id
db.getCollection('Name Collection').find().sort({"_id" :"1"})

// total number of Tablets buyer CTM
 // 1 . away
 db.getCollection('Name Collection').aggregate([
   {$match : {"type of products": "Tablets"}},
   { $group: { _id: null, total: { $sum: 1 } } }
 ])
 // 2 . away
 db.getCollection('Name collection').aggregate([
   { $match: { "type of products": "Tablets" } },
   { $count: "total" }
 ])

//unwind PRO
db.getCollection('name collection').aggregate([
  { $match: { "name": "iPad 16GB Wifi" } },
  { $unwind: "$sizes" }
])
// create user with highest authority
db.createUser({
  user: "Toan", 
  pwd: "123456", 
  roles:[{ role: "root", db: "admin"}]
})

//update
db.getCollection('name collection').updateMany(
  { "name": "iPad 16GB Wifi" },
  { $set: { "sizes": ["S", "M", "L", "XL"] } }
)

//Add a fields
db.getCollection('name collection').updateMany({}, { $set: { "newField": "newValue" } })
  // EX add many
  db.getCollection('name collection').updateMany({}, { $set: { "branch": "TP.HCM" } })
 // Ex add one 
 db.getCollection('name collection').updateOne({ "name": "iPad 16GB Wifi"}, { $set: { "newField": "newValue" } })

//sum of price ipad 16gb wifi
 db.getCollection('name collection').aggregate([
  {$match: { "name": "iPad 16GB Wifi"}},
  { $group: { _id: null, total: { $sum: "$price" } } }
 ])

 //sort of name
 db.getCollection('name collection').aggregate([
  { $sort: { "name": -1 } }
])
