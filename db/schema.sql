-- log on to psql
-- \l to show dbs
-- CREATE DATABASE menuservice
-- \l to ensure db was created
-- \c menuservice
-- \i schema.sql

DROP TABLE IF EXISTS menu;

CREATE TABLE menu (
  id int,
  single_menu_item varchar(255),
  price_per_guest int,
  restaurant_id int
);

DROP TABLE IF EXISTS menu_items;

CREATE TABLE menu_items (
  id int,
  dish_name varchar(255),
  dish_description text,
  single_menu_id int
);
