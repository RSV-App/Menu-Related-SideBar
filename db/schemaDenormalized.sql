DROP TABLE IF EXISTS menuItemsDenormalized;

CREATE TABLE menuItemsDenormalized (
  id int,
  dish_name varchar(255),
  dish_description text,
  single_menu_id int,
  single_menu_item varchar(255),
  price_per_guest int,
  restaurant_id int
);
