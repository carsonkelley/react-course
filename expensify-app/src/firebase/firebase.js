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

database.ref().set({
    name: 'Carson Kelley',
    age: 27,
    isSingle: false,
    location: {
        city: 'Houston',
        country: 'United States'
    }
});

// database.ref().set('This is my data.');

database.ref('age').set(27);
database.ref('location/city').set('New York City');

database.ref('attributes').set({
    height: 67,
    weight: 145
});