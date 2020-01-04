const fs = require("fs");
const faker = require("faker");
const { exec } = require("child_process");
const path = require("path");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

let makeFakeData = () => {
  let count = 1250000;
  let data = [];

  for (let a = 0; a < count; a++) {
    let dummyObj = {};
    dummyObj.productName = faker.commerce.productName();
    dummyObj.price = faker.commerce.price();
    dummyObj.sku = faker.address.zipCode();
    dummyObj.model = faker.lorem.word();
    dummyObj.onHand = faker.finance.amount();
    dummyObj.options = faker.commerce.productMaterial();
    dummyObj.auxCategory = faker.commerce.department();

    data.push(dummyObj);
  }
  return data;
};

let convertToCSV = (data, count) => {
  let csvWriter = createCsvWriter({
    path: `/Users/jdiaz/WorkSpace/hackReactor/FEC+SDC/productInfo/server/dataGeneration/csv/test${count}.csv`,
    header: [
      { id: "productName", title: "productName" },
      { id: "price", title: "price" },
      { id: "sku", title: "sku" },
      { id: "model", title: "model" },
      { id: "onHand", title: "onHand" },
      { id: "options", title: "options" },
      { id: "auxCategory", title: "auxCategory" }
    ]
  });
  const records = data;

  csvWriter
    .writeRecords(records)
    .then(() => {
      console.log("...Done");
    })
    .catch(err => {
      console.error(`Exec error: ${err}`);
    });
};

let bulkSeedDb = () => {
  for (let count = 0; count < 8; count++) {
    setTimeout(() => {
      // Connecting and seeding postgres DB
      let command = `psql \
      -d SDC \
      --user=jdiaz \
      -c "COPY westbuyproductinfoproducts (productName,price,sku,model,onHand,options,auxCategory) \
      FROM '/Users/jdiaz/WorkSpace/hackReactor/FEC+SDC/productInfo/server/dataGeneration/csv/test${count}.csv' \
      WITH (FORMAT csv);"`;

      exec(command, function(error, stdout, stderr) {
        // do whatever you need during the callback
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
      });

      // Connecting and seeding to mongo DB
      // let command = `/data/mongodb-macos-x86_64-4.2.2/bin/mongoimport --host=127.0.0.1 -d westbuy -c products --type csv --file /Users/jdiaz/WorkSpace/hackReactor/SDC/Navbar-master/server/db/csv/test${a}.csv --headerline`;
      // exec(command, function(error, stdout, stderr) {
      //   // do whatever you need during the callback
      //   if (error) {
      //     console.error(`exec error: ${error}`);
      //     return;
      //   }
      //   console.log(`stdout: ${stdout}`);
      //   console.error(`stderr: ${stderr}`);
      // });
    }, 30000);
  }
};

let outputDataToCSV = () => {
  let dataSet = makeFakeData();

  for (let a = 0; a < 8; a++) {
    setTimeout(() => {
      convertToCSV(dataSet, a);
    }, 30000 * a);
  }

  setTimeout(() => {
    bulkSeedDb();
  }, 252000);
};

outputDataToCSV();
