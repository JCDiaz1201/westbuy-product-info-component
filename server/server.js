const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db/db");
const path = require("path");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.json());

// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

app.get("/getproduct", (req, res) => {
  db.getProduct(req.query.selectedItemId)
    .then(msg => {
      res.send(msg);
    })
    .catch(err => {
      res.end(err);
    });
});

app.post("/postproduct", (req, res) => {
  db.postProduct()
    .then(msg => {
      res.send(msg);
      res.end();
    })
    .catch(err => {
      res.end(err);
    });
});

app.put("/putproduct", (req, res) => {
  db.putProduct(selectedItemId)
    .then(msg => {
      res.send(msg);
      res.end();
    })
    .catch(err => {
      res.end(err);
    });
});

app.delete("/deleteproduct", (req, res) => {
  db.deleteProduct(selectedItemId)
    .then(msg => {
      res.send(msg);
      res.end();
    })
    .catch(err => {
      res.end(err);
    });
});

app.get("/seed", (req, res) => {
  db.seedDatabase()
    .then(() => {
      res.end();
    })
    .catch(err => {
      res.end(err);
    });
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
