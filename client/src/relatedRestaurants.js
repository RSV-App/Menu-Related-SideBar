/* eslint-disable camelcase */
const relatedRestaurants =
    [
      {
        id: 1,
        name: 'Torp and Sons',
        cuisine: 'Quis',
        location: 'East Eudora',
        reviews: 3,
        image: 'tmp//5429725bd999d57b0c8a4db37a8bfa5a.jpg'
      },
      {
        id: 2,
        name: 'Friesen, Hoppe and Trantow',
        cuisine: 'Tempora',
        location: 'Hassanport',
        reviews: 4,
        image: 'tmp//2f7de7e966c2367ebdd2e33f14200c77.jpg'
      },
      {
        id: 3,
        name: 'Bode-Fahey',
        cuisine: 'Nisi',
        location: 'New Jaylenview',
        reviews: 6,
        image: 'tmp//668cde4d6e65891f60763f84e88372e4.jpg'
      },
      {
        id: 4,
        name: 'Schiller, Romaguera and Schoen',
        cuisine: 'Eveniet',
        location: 'Thoratown',
        reviews: 5,
        image: 'tmp//6426f945a22f4b97c010514c7974f6fc.jpg'
      },
      {
        id: 5,
        name: 'Little-Smitham',
        cuisine: 'Quia',
        location: 'Martaburgh',
        reviews: 3,
        image: 'tmp//5d283ee293e795f922d1609c830c10ad.jpg'
      },
      {
        id: 6,
        name: 'Bauch-Bruen',
        cuisine: 'Phonxay',
        location: 'Littelview',
        reviews: 5,
        image: 'tmp//ba1f97c85077fe1df7eb462714c19f5c.jpg'
      },
      {
        id: 7,
        name: 'Balistreri, Schultz and Wisoky',
        cuisine: 'Aab',
        location: 'Connellystad',
        reviews: 8,
        image: 'tmp//914ed837b860ee59bd297a913df438f6.jpg'
      },
      {
        id: 8,
        name: 'Beer, Anderson and Collier',
        cuisine: 'Nulla',
        location: 'East Adrain',
        reviews: 1,
        image: 'tmp//45511ee43ef400644429b98d09dbacc7.jpg'
      },
      {
        id: 9,
        name: 'Walsh-Turcotte',
        cuisine: 'Consequunturaa',
        location: 'South Jailynview',
        reviews: 9,
        image: 'tmp//d5fd0104e689fef0c18df5ae70e61b0a.jpg'
      },
      {
        id: 10,
        name: 'Greenfelder Group',
        cuisine: 'Nostrumass',
        location: 'Runolfssonfort',
        reviews: 2,
        image: 'tmp//f00730a17a99c24cb171b6d8f756e156.jpg'
      },
      {
        id: 11,
        name: 'Cassin, Weissnat and Bauch',
        cuisine: 'Enim',
        location: 'North Joshuachester',
        reviews: 8,
        image: 'tmp//b08192e3ec19befaa424f03a78466057.jpg'
      },
      {
        id: 12,
        name: 'Kuhlman-Torp',
        cuisine: 'Quodalia',
        location: 'East Ceasarmouth',
        reviews: 2,
        image: 'tmp//60c2f365bc4a68d3fa93ebd9992389ad.jpg'
      },
      {
        id: 13,
        name: 'Reichel, Vandervort and Sawayn',
        cuisine: 'Magnam',
        location: 'Port Cassandrafort',
        reviews: 1,
        image: 'tmp//51405d885f5b8e079f7e68ca0f5a7d1c.jpg'
      },
      {
        id: 14,
        name: 'Leffler-Hyatt',
        cuisine: 'Etumas',
        location: 'Wittingbury',
        reviews: 4,
        image: 'tmp//428640fbb0b13b2199be48cf26025528.jpg'
      },
      {
        id: 15,
        name: 'Thiel-Carroll',
        cuisine: 'Repudiandae',
        location: 'Port Audreanneberg',
        reviews: 9,
        image: 'tmp//4d0e66bd1613c9b4908f35ce5aa8ce74.jpg'
      },
      {
        id: 16,
        name: 'Balistreri, Koepp and Hayes',
        cuisine: 'Non',
        location: 'North Wilhelmineland',
        reviews: 9,
        image: 'tmp//81b51239830b363fc93b118dbdc0fcdf.jpg'
      },
      {
        id: 17,
        name: 'Predovic Group',
        cuisine: 'Facere',
        location: 'Charlieport',
        reviews: 8,
        image: 'tmp//88480300f2c5799d5481cf27452c98be.jpg'
      },
      {
        id: 18,
        name: 'Koelpin LLC',
        cuisine: 'Quisima',
        location: 'Roselynfurt',
        reviews: 5,
        image: 'tmp//c99a9393352db288f70eab1c2d6c32c1.jpg'
      },
      {
        id: 19,
        name: 'Cummings and Sons',
        cuisine: 'Namjoon',
        location: 'Lake Lavern',
        reviews: 6,
        image: 'tmp//356b48dd049feb5cf4ed4f4a189a7807.jpg'
      },
      {
        id: 20,
        name: 'Torp-Auer',
        cuisine: 'Praesentium',
        location: 'Port Cleoton',
        reviews: 4,
        image: 'tmp//3c85bd95b495caad8707b7f49ad957cb.jpg'
      },
      {
        id: 21,
        name: 'Marvin, Kuhic and Wiegand',
        cuisine: 'Nisivila',
        location: 'New Adeline',
        reviews: 2,
        image: 'tmp//5ab1945bc42d4e860eee4043c8d0bbe7.jpg'
      },
      {
        id: 22,
        name: 'O\'Reilly-Wilkinson',
        cuisine: 'nulla',
        location: 'Juvenalview',
        reviews: 5,
        image: 'tmp//2bbf8263e237da4abb75ad12e362fa0e.jpg'
      },
      {
        id: 23,
        name: 'Veum, Halvorson and Batz',
        cuisine: 'nihil',
        location: 'Lylaside',
        reviews: 4,
        image: 'tmp//042fc8b2d711ab86dba8c0ee480544e9.jpg'
      },
      {
        id: 24,
        name: 'Schimmel, Pollich and Mayer',
        cuisine: 'officia',
        location: 'West Estastad',
        reviews: 6,
        image: 'tmp//9626bcbb4bbe961ab5385baa70b60128.jpg'
      },
      {
        id: 25,
        name: 'Frami, Collins and Treutel',
        cuisine: 'quidem',
        location: 'West Israel',
        reviews: 7,
        image: 'tmp//0203930eac47812422a556110cdc8bdb.jpg'
      }
    ];

export default relatedRestaurants;