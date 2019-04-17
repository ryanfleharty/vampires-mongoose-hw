// 1. Require your node modules
const mongoose = require('mongoose');
// 2. Require your model (and possibly your extra data source);
const Vampire = require('./models/vampire.js');
// 3. Connect your database and collection name
// Vampire.collection.insertMany([{
//             name: 'Count Chocula',
//             hair_color: 'brown',
//             eye_color: 'brown',
//             dob: new Date(1971, 2, 13, 7, 47),
//             loves: ['cereal', 'marshmallows'],
//             location: 'Minneapolis, Minnesota, US',
//             gender: 'm',
//             victims: 2
//         }, {
//             name: 'Dracula',
//             dob: new Date(937, 0, 24, 13, 0),
//             hair_color: 'brown',
//             eye_color: 'blue',
//             loves: ['Winona Ryder', 'top hats', 'fancy cloaks', 'handlebar   mustaches'],
//             location: 'Transylvania, Romania',
//             gender: 'm',
//             victims: 1238
//         }, {
//             name: 'Elizabeth Bathory ',
//             dob: new Date(1560, 8, 7, 22, 10),
//             hair_color: 'brown',
//             eye_color: 'brown',
//             loves: ['virgin blood', 'fancy cloaks', 'frilly collars'],
//             location: 'Nyírbátor, Hungary',
//             gender: 'f',
//             victims: 980
//         }, {
//             name: 'Lestat',
//             dob: new Date(1760, 11, 9, 18, 44),
//             hair_color: 'blonde',
//             eye_color: 'blue',
//             loves: ['frilly shirtsleeves', 'frilly collars', 'lurking in   rotting mansions', 'Louis'],
//             location: 'Auvergne, France',
//             gender: 'm',
//             victims: 324
//         }, {
//             name: 'Louis de Pointe du Lac',
//             dob: new Date(1766, 6, 4, 2, 1),
//             hair_color: 'brown',
//             eye_color: 'blue',
//             loves: ['brooding', 'Claudia', 'staring longingly into the   distance'],
//             location: 'New Orleans, Louisiana, US',
//             gender: 'm',
//             victims: 150
//         }, {
//             name: 'Claudia',
//             dob: new Date(1793, 2, 7, 8, 30),
//             hair_color: 'blonde',
//             eye_color: 'blue',
//             loves: ['doll babies', 'ribbons', 'appearing innocent', '  trickery'],
//             location: 'New Orleans, Louisiana, US',
//             gender: 'f',
//             victims: 290
//         }, {
//             name: 'Armand',
//             dob: new Date(1481, 6, 1, 10, 42),
//             hair_color: 'red',
//             eye_color: 'brown',
//             loves: ['theatre', 'painting', 'velvet robes', 'being tragic'],
//             location: 'Kiev, Russia',
//             gender: 'm',
//             victims: 1045
//         }, {
//             name: 'Santino',
//             dob: new Date(1465, 6, 1, 10, 42),
//             hair_color: 'brown',
//             eye_color: 'brown',
//             loves: ['trickery', 'vampiric cults', 'fancy cloaks'],
//             location: 'Rome, Italy',
//             gender: 'm',
//             victims: 1103
//         }, {
//             name: 'Akasha',
//             dob: new Date(-8000, 6, 1, 10, 42),
//             hair_color: 'brown',
//             eye_color: 'green',
//             loves: ['eating hearts', 'bathing in roses', 'elaborate   headdresses', 'R&B music'],
//             location: 'Kemet, Egypt',
//             gender: 'f',
//             victims: 210234,
//             title: 'Queen of the Damned'
//         }, {
//             name: 'Edward Cullen',
//             dob: new Date(1901, 6, 20, 0, 57),
//             hair_color: 'brown',
//             eye_color: 'brown',
//             loves: ['brooding', 'diamond skin', 'calling people spider   monkeys'],
//             location: 'Chicago, Illinois, US',
//             gender: 'm',
//         }, {
//             name: 'Persephone Bourignon',
//             dob: new Date(1801, 5, 17, 14, 53),
//             hair_color: 'red',
//             eye_color: 'green',
//             loves: ['wine', 'fancy cloaks', 'appearing innocent'],
//             location: 'Paris, France',
//             gender: 'f',
//             victims: 450
//         }, {
//             name: 'René Tremblay',
//             dob: new Date(1922, 2, 8, 5, 3),
//             hair_color: 'brown',
//             eye_color: 'green',
//             loves: ['frilly shirtsleeves', 'trickery', 'card games'],
//             location: 'Bucharest, Romania',
//             gender: 'm',
//             victims: 134
//         }, {
//             name: 'Caroline Belmont',
//             hair_color: 'blonde',
//             eye_color: 'brown',
//             dob: new Date(1799, 4, 21, 16, 15),
//             loves: ['marshmallows', 'ribbons', 'being tragic'],
//             location: 'Ljubljana, Slovenia',
//             gender: 'f',
//             victims: 567
//         }, {
//             name: 'Francis Frost',
//             hair_color: 'black',
//             eye_color: 'blue',
//             dob: new Date(1976, 6, 18, 18, 18),
//             loves: ['brooding', 'frilly shirtsleeves'],
//             location: 'New York, New York, US',
//             gender: 'm',
//             victims: 112
//         }, {
//             name: 'Barnabas Spenser',
//             hair_color: 'brown',
//             eye_color: 'brown',
//             dob: new Date(1984, 6, 3, 13, 12),
//             loves: ['being merry', 'being insane', 'card games'],
//             location: 'New York, New York, US',
//             gender: 'm',
//             title: 'Osiris of Sewer Rats'
//         }]
// , (err, data) => {
//     console.log("added provided vampire data")
//     mongoose.connection.close();
// });

// 4. Open your mongoose connection
const connectionString = 'mongodb://localhost/vampires'; 


mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
});


mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${connectionString}`);
});

mongoose.connection.on('error', (err) => {
    console.log(`Mongoose connected error ${err}`);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});
/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you

// ### Add some new vampire data
// Vampire.create({
// name: 'Bob',
// dob: 10,
// hair_color: 'black',
// eye_color: 'blue',
// loves: ['burgers'],
// location: 'New York',
// gender: 'm',
// victims: 12
// });

// Vampire.create({
// name: 'Susan',
// dob: 12,
// hair_color: '',
// eye_color: 'blue',
// loves: ['fries'],
// location: 'Ohio',
// gender: 'f',
// victims: 10
// });

// Vampire.create({
// name: 'Steven',
// dob: 3,
// hair_color: 'purple',
// eye_color: 'pink',
// loves: ['pillows'],
// location: 'Denver',
// gender: 'm',
// victims: 32
// });

// Vampire.create({
// name: 'Wendy',
// dob: 25,
// hair_color: 'white',
// eye_color: 'black',
// loves: ['apples'],
// location: 'Florida',
// gender: 'f',
// victims: 89
// });
/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison
// Find all the vampires that that are females
// Vampire.find({
//         gender: 'f'
//     },
//     (err, vampires) => {
//         console.log(vampires);
//     }
// );
// have greater than 500 victims
// Vampire.find({
//         victims: {
//             $gt: 500
//         }
//     },
//     (err, vampires) => {
//         console.log(vampires);
//     }
// );
// have fewer than or equal to 150 victims
// Vampire.find({
//         victims: {
//             $lte: 150
//         }
//     },
//     (err, vampires) => {
//         console.log(vampires);
//     }
// );
// have a victim count is not equal to 210234
// Vampire.find({
//         victims: {
//             $ne: 21034
//         }
//     },
//     (err, vampires) => {
//         console.log(vampires);
//     }
// );
// have greater than 150 AND fewer than 500 victims
// Vampire.find({
//         victims: {
//             $gt: 150,
//             $lt: 500
//         }
//     },
//     (err, vampires) => {
//         console.log(vampires);
//     }
// );

/////////////////////////////////////////////////
// ### Select by exists or does not exist
// have a title property
// Vampire.find({
//         title: {
//             $exists: true
//         }
//     },
//     (err, vampires) => {
//         console.log(vampires);
//     }
// );
// do not have a victims property
//  Vampire.find({
//         victims: {
//             $exists: false
//         }
//     },
//     (err, vampires) => {
//         console.log(vampires);
//     }
// );
// have a title AND no victims
//  Vampire.find({
//         title: {
//             $exists: true
//         },
//         victims:{
//             $exists: false
//         }
//     },
//     (err, vampires) => {
//         console.log(vampires);
//     }
// );
// have victims AND the victims they have are greater than 1000
//  Vampire.find({
//         victims: {
//             $exists: true,
//             $gt: 150
//         }
//     },
//     (err, vampires) => {
//         console.log(vampires);
//     }
// );
/////////////////////////////////////////////////
// ### Select with OR
// are from New York, New York, US or New Orleans, Louisiana, US
 Vampire.find({
             $or: [{
                     location: 'New York, New York, US'
                 },
                 {
                     location: 'New Orleans, Louisiana, US'
                 }
             ]
        },
    (err, vampires) => {
        console.log(vampires);
    }
);
// love brooding or being tragic
//  Vampire.find({
//          $or: [{
//                  loves: 'brooding'
//              },
//              {
//                  loves: 'being tragic'
//              }
//          ]
//      },
//      (err, vampires) => {
//          console.log(vampires);
//      }
//  );
// have more than 1000 victims or love marshmallows
//  Vampire.find({
//          $or: [{
//                  victims: {
//                      $gt:1000,
//                  }
//              },
//              {
//                  loves: 'marshmallows'
//              }
//          ]
//      },
//      (err, vampires) => {
//          console.log(vampires);
//      }
//  )
// have red hair or green eyes
 Vampire.find({
         $or: [{
                 hair_color: 'red'
             },
             {
                 eye_color: 'green'
             }
         ]
     },
     (err, vampires) => {
         console.log(vampires);
     }
 );
/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
