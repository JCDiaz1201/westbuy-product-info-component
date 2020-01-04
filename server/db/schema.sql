CREATE TABLE westBuyProductInfoProducts (
  Id SERIAL unique PRIMARY KEY,
  productName text NOT NULL,
  price text NOT NULL,
  sku text NOT NULL,
  model text NOT NULL,
  onHand text NOT NULL,
  options text,
  auxCategory text
);
/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/
/* For the record, these numbers were generated with Math.random,
 * please don't read into them. :) */
-- INSERT INTO prodcuts (id, price, productName, sku, model, onHand) VALUES ();