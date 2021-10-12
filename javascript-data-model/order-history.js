var orderHistory = [
  {
    itemsDetail: [
      {
        name: 'JavaScript for impatient programmers',
        author: {
          firstName: 'Axel',
          lastName: 'Rauschmayer',
          honorifics: 'Dr.'
        },
        price: 31.55
      }
    ],
    orderDetail: {
      orderNumber: '114-3941689-8772232',
      datePlaced: {
        month: 'August',
        day: 8,
        year: 2020
      },
      returnBy: {
        month: 'September',
        day: 7,
        year: 2020
      },
      shipTo: 'JS Masher',
      residentPresent: false
    }
  },
  {
    itemsDetail: [
      {
        name: 'The Timeless Way of Building',
        author: {
          firstName: 'Christopher',
          lastName: 'Alexander',
          honorifics: null
        },
        price: 41.33
      }
    ],
    orderDetail: {
      orderNumber: '113-9984268-1280257',
      datePlaced: {
        month: 'July',
        day: 20,
        year: 2020
      },
      returnBy: {
        month: 'August',
        day: 19,
        year: 2020
      },
      shipTo: 'JS Masher',
      residentPresent: true,
      total: 44.33
    }
  },
  {
    itemsDetail: [
      {
        name: 'Gamecube Controller Adapter. Super Smash Bros Switch Gamecube Adapter for WII U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
        author: null,
        price: 15.98
      }
    ],
    orderDetail: {
      orderNumber: '114-2875557-9059409',
      datePlaced: {
        month: 'July',
        day: 7,
        year: 2020
      },
      returnBy: {
        month: 'August',
        day: 5,
        year: 2020
      },
      shipTo: 'JS Masher',
      residentPresent: true,
      total: 17.22
    }
  },
  {
    itemsDetail: [
      {
        name: 'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)',
        author: null,
        price: 94.95
      },
      {
        name: 'The Art of Sql',
        author: {
          firstName: 'Stephane',
          lastName: 'Faroult',
          honorifics: null
        },
        price: 33.99
      }

    ],
    orderDetail: {
      orderNumber: '113-2883177-2648248',
      datePlaced: {
        month: 'July',
        day: 5,
        year: 2020
      },
      returnBy: {
        month: 'August',
        day: 4,
        year: 2020
      },
      shipTo: 'JS Masher',
      residentPresent: false,
      total: 138.93
    }
  }
];

console.log('value of orderHistory:', orderHistory);
