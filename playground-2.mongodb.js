/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = '2';
const collection = 'sales';

// Create a new database.
use(database);

// Create a new collection.
db.createCollection(collection);

db.getCollection(collection).insertMany([
  { 'item': 'Bia Tiger', 'price': 10, 'quantity': 2, 'date': new Date('2014-03-01T08:00:00Z') },
  { 'item': 'Coca', 'price': 20, 'quantity': 1, 'date': new Date('2014-03-01T09:00:00Z') },
  { 'item': 'Pepsi', 'price': 5, 'quantity': 10, 'date': new Date('2014-03-15T09:00:00Z') },
  { 'item': 'Bia heliken', 'price': 5, 'quantity': 20, 'date': new Date('2014-04-04T11:21:39.736Z') },
  { 'item': 'Keo ngot', 'price': 10, 'quantity': 10, 'date': new Date('2014-04-04T21:23:13.331Z') },
  { 'item': 'Banh mi', 'price': 7.5, 'quantity': 5, 'date': new Date('2015-06-04T05:08:13Z') },
  { 'item': 'Khau trang', 'price': 7.5, 'quantity': 10, 'date': new Date('2015-09-10T08:43:00Z') },
  { 'item': 'Keo', 'price': 10, 'quantity': 5, 'date': new Date('2016-02-06T20:20:13Z') },
]);

db.createCollection('Purchase');
//purchase source
db.getCollection('Purchase').insertMany([
  { 'item': 'Bia Tiger', 'Pur': 'Dai Li Sai Gon', 'Pur' : 'Dai Li Da Nang' },
  { 'item': 'Coca', 'Pur': 'Dai Li Sai Gon' },
  { 'item': 'Pepsi', 'Pur': 'Dai Li Sai Gon' },
  { 'item': 'Bia Heliken', 'Pur': 'Dai Li Ha Noi' },
  { 'item': 'Keo Ngot', 'Pur': 'Dai Li Sai Gon' },
  { 'item': 'Banh Mi', 'Pur': 'Dai Li Ha Noi' },
  { 'item': 'Khau Trang', 'Pur': 'Dai Li Ha Noi' },
  { 'item': 'Keo chua', 'Pur': 'Dai Li Sai Gon' },
]);

// Run a find command to view items sold on April 4th, 2014.
db.getCollection('sales').find({
  date: { $gte: new Date('2014-04-04'), $lt: new Date('2014-04-05') }
}).count();

// Here we run an aggregation and open a cursor to the results

db.getCollection('sales').aggregate([
    // Find all of the sales that occurred in 2014.
    { $match: { date: { $gte: new Date('2014-01-01'), $lt: new Date('2015-01-01') } } },
    // Group the total sales for each product.
    { $group: { _id: '$item', totalSaleAmount: { $sum: { $multiply: [ '$price', '$quantity' ] } } } }
]);


db.getCollection('Purchase').find({
  Pur: 'Dai Li Da Nang'
});
// phan quyen



