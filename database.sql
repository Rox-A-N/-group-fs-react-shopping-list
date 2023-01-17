-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data
CREATE TABLE "shoppingList" (
"id" SERIAL PRIMARY KEY,
"name" VARCHAR(80),
"quantity" DECIMAL (10,2),
"unit" VARCHAR(20)
);


INSERT INTO "shoppingList" ("name", "quantity", "unit")
VALUES ('cereal', 15, 'boxes');

SELECT * FROM "shoppingList";

ALTER TABLE "shoppingList"
ADD "purchased" BOOLEAN ;