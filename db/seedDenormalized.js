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

const createMenus = async (maxRestaurants) => {
  // create menus for each of 1-maxRestaurants
  let menuItemStream = fs.createWriteStream('menuItemsDenormalized.csv', { flags: 'a'});


  let restaurantID = 1;
  let menuID = 1;
  let menuItemID = 1;

  while(restaurantID <= maxRestaurants) {
    let numMenus = howManyMenus();

    for (let i = 0; i < numMenus; i += 1) {
        
        // "single_menu_item" ---> menu name, varchar(255)
        let singleMenuItem = Faker.lorem.word();

        // price_per_guest ---> int between 1 and 1000?
        let pricePerGuest = (Math.floor(Math.random() * 1000) + 1);

        let numMenuItems = howManyMenuItems();
        for (let j = 0; j < numMenuItems; j += 1) {
            let menuItem = '';
            // "id" ---> PK, int
            menuItem += menuItemID + ',';
            menuItemID += 1;

            // "dish_name" ---> varchar(255)
            menuItem += Faker.lorem.word() + ',';

            // dish_description ---> varchar(255)
            menuItem += Faker.lorem.sentences() + ',';

            // single_menu_id ---> int, FK to menu id
            menuItem += menuID + ',';

            // 
            menuItem += singleMenuItem + ',';

            //
            menuItem += pricePerGuest + ',';

            //
            menuItem += restaurantID + '\n';

            // write to CSV file
            let promise = write(menuItemStream, menuItem);
            if (promise) {
                await promise;
            }
        }
        menuID +=1;
    }
    restaurantID += 1;
  }
};

createMenus(10000000).then(() => console.log("Finished Creating Menus!!"));