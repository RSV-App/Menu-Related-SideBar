const Faker = require('faker');
const fs = require('fs');

//generate int between 2 and 4, used to determine menus per restaurant
const howManyMenus = () => (Math.floor(Math.random() * 3) + 2);

// generate int between 3 and 5, used to determine items per menu
const howManyMenuItems = () => (Math.floor(Math.random() * 3) + 3);

const write = (writer, data) => {
  if (!writer.write(data)) {
    return new Promise((resolve) => {
      writer.once('drain', resolve);
    });
  }
};

const persistIndexer = (indexer, callback) => (
  callback(indexer)
);

const createRestaurants = async (maxrestaurants) => {
  let restaurantStream = fs.createWriteStream('restaurants.json', { flags: 'a' });
  let promise1 = write(restaurantStream, '[');
  if (promise1) {
    await promise1;
  }

  let menuIndexer = 1;
  let menuItemIndexer = 1;
  let firstLineInJSON = true;

  for (let i = 1; i <= maxrestaurants; i += 1) {
    let restaurant = {};
    restaurant.id = i;
    restaurant.menus = [];

    let numberOfMenus = howManyMenus();

    for (let j = 0; j < numberOfMenus; j += 1) {
      let menu = {};
      menu.id = menuIndexer;
      menu.singleMenuItem = Faker.lorem.word();
      menu.pricePerGuest = Faker.lorem.word();

      let numberOfMenuItems = howManyMenuItems();
      for (let k = 0; k < numberOfMenuItems; k += 1) {
          let newMenu = {}
          Object.assign(newMenu, menu);
          newMenu.menuItemID = menuItemIndexer;
          newMenu.dishName = Faker.lorem.word();
          newMenu.dishDescription = Faker.lorem.sentences();
          restaurant.menus.push(newMenu);
        
        menuItemIndexer += 1;
      }
      menuIndexer += 1;
    }

    let promise2 = write(restaurantStream, (firstLineInJSON ? '' : ',') + '\n' + JSON.stringify(restaurant));
    if (promise2) {
      await promise2;
    }
    firstLineInJSON = false;
  }
  let promise3 = write(restaurantStream, '\n' + ']');
  if (promise3) {
    await promise3;
  }
};



createRestaurants(10000000).then(() => console.log("Finished Creating Menus!!"));