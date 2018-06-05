const fs = require('fs');

fs.readFile('./hello.txt', (err, data) => {
    console.time('funchallenge');
    if (err) {
        console.log('ERROR');
    }
    console.log('Async', data.toString());
    console.timeEnd('funchallenge');
});

const file = fs.readFileSync('./hello.txt');
console.log('Sync', file.toString());
// APPEND
/* fs.appendFile('./hello.txt', 'This is so cool!', err => {
    if (err) {
        console.log(err);
    }
}); */
// WRITE
/* fs.writeFile('./bye.txt', 'sad to see you go', err => {
    if (err) {
        console.log(err);
    }
}); */
// DELETE
/* fs.unlink('./bye.txt', err => {
    if (err) {
        console.log(err);
    }
    console.log('Inception');
}); */