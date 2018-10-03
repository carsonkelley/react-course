const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Carson',
            age: 27
        });
        //reject('something went wrong');
    }, 4500);
});

console.log('before');

promise.then((data) => {
    console.log('1', data);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("This is my other promise");
        }, 4500);
    });
}).then((str) => {
    console.log('does this run', str);
}).catch((error) => {
    console.log('error: ', error);
});

console.log('after');