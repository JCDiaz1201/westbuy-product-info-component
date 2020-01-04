const { Client, Pool } = require("pg");
const pg = require("pg");
const pgConfig = require("./config/db.pg.config");
// const mongoDb = require("./config/db.mongo.config");
const faker = require("faker");

// below is for postgres pool connection

// pg.defaults.poolSize = 1000;
// const pool = new Pool({
//   host: "localhost",
//   user: "jdiaz",
//   password: "FUpostgres1201",
//   database: "west_buy_2",
//   port: 5432
// });
// pool.connect();

//below is for a vanilla postgres connection
const connection = new Client(pgConfig);
connection.connect();

let getProduct = itemToReturn => {
  // let pgItemToReturn = Math.floor(Math.random() * 1000000 + 1);
  // let mongoDbItemToReturn = faker.commerce.productName();
  // below is for postgres
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM westbuyproductinfoproducts WHERE id=${itemToReturn}`,
      (error, result) => {
        if (error) {
          reject(error);
        }
        resolve(result.rows);
      }
    );
  });
  // below is for mongoDb
  // return new Promise((resolve, reject) => {
  //   mongoDb.mongoDatabase.findOne(
  //     { productName: mongoDbItemToReturn },
  //     (err, results) => {
  //       if (err) {
  //         reject(err);
  //       } else {
  //         resolve(results);
  //       }
  //     }
  //   );
  // });
};

let postProduct = () => {
  // below is for postgres
  let newItem = {
    productName: faker.commerce.productName(),
    price: faker.commerce.price(),
    sku: faker.internet.ip(),
    model: faker.lorem.word(),
    onHand: faker.finance.amount(),
    options: faker.commerce.productMaterial(),
    auxCategory: faker.commerce.department()
  };

  return new Promise((resolve, reject) => {
    let insertProductQuery = `INSERT INTO  westbuyproductinfoproducts (productname, price, sku, model, onHand, options, auxCategory)
     VALUES ('${newItem.productName}','${newItem.price}','${newItem.sku}',
     '${newItem.model}','${newItem.onHand}','${newItem.options}', '${newItem.auxCategory}')
     `;
    connection.query(insertProductQuery, (error, result) => {
      if (error) {
        SA;
        reject(error);
      }
      resolve(result);
    });
  });

  // below is for mongoDb
  // return new Promise((resolve, reject) => {
  //   mongoDb.mongoDatabase.insertOne(newItem, (err, results) => {
  //     if (err) {
  //       reject(err);
  //     } else {
  //       resolve("Record posted!");
  //     }
  //   });
  // });
};

let putProduct = product => {
  // below is for postgres
  let newProductId = Math.floor(Math.random() * 1000000 + 1);
  let productName = "Tianna Gregory";

  console.log(newProductId);

  return new Promise((resolve, reject) => {
    let insertProductQuery = `UPDATE westbuyproductinfoproducts SET productName= '${productName}' WHERE id='${newProductId}'`;
    connection.query(insertProductQuery, (error, result) => {
      if (error) {
        reject(error);
      }
      resolve(result);
    });
  });

  // below is for mongoDb
  // return new Promise((resolve, reject) => {
  //   mongoDb.mongoDatabase.update(
  //     { productName: faker.commerce.productName() },
  //     {
  //       $set: { price: "100 Orens" }
  //     },
  //     (err, results) => {
  //       if (err) {
  //         reject(err);
  //       } else {
  //         resolve("Record posted!");
  //       }
  //     }
  //   );
  // });
};

let deleteProduct = product => {
  // below is for postgres
  let newProductId = 9999998;

  return new Promise((resolve, reject) => {
    let deleteProductQuery = `DELETE FROM westbuyproductinfoproducts WHERE id='${newProductId}'`;
    connection.query(deleteProductQuery, (error, result) => {
      if (error) {
        reject(error);
      }
      resolve(result);
    });
  });
  // below is for mongoDb

  // return new Promise((resolve, reject) => {
  //   mongoDb.mongoDatabase.deleteOne(
  //     { productName: faker.commerce.productName() },
  //     (err, results) => {
  //       if (err) {
  //         reject(err);
  //       } else {
  //         resolve("Record deleted!");
  //       }
  //     }
  //   );
  // });
};

module.exports = { getProduct, postProduct, putProduct, deleteProduct };
