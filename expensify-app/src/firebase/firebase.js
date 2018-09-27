import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDuaeaXBK2RPEHr5sSTsOJEs0UeLhzyRe8",
    authDomain: "expensify-4e607.firebaseapp.com",
    databaseURL: "https://expensify-4e607.firebaseio.com",
    projectId: "expensify-4e607",
    storageBucket: "expensify-4e607.appspot.com",
    messagingSenderId: "880191983180"
  };

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('notes/-LNKpa2t6r65gGR8xXQk').remove();


// //child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });

    // database.ref('expenses')
    //     .on('value', (snapshot) => {
    //         const expenses = [];
    //         snapshot.forEach((childSnapshot) => {
    //             expenses.push({
    //                 id: childSnapshot.key,
    //                 ...childSnapshot.val()
    //             });
    //         });
    //         console.log(expenses);
    //     });

// database.ref('expenses').push({
//     description: 'an expense',
//     note: 'noted',
//     amount: 12300,
//     createdAt: 9372046
// });

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'a, kdjfs, furfurufuru'
// });

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data ', e);
//     });

// database.ref().set({
//     name: 'Carson Kelley',
//     age: 27,
//     stressLevel: 7,
//     job: {
//         title: 'Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Houston',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });


// database.ref()
//     .remove()
//     .then(() => {
//         console.log('Removed');
//     }).catch((e) => {
//         console.log('Error: ', e);
//     });