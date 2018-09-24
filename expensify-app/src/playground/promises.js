const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     stuff: 'This is my resolved data'
        // });
        reject('something went wrong');
    }, 4500);
});

console.log('before');

promise.then((data) => {
    console.log('1', data);
}).catch((error) => {
    console.log('error: ', error);
});

console.log('after');