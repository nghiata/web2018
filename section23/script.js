const fs = require('fs');

fs.readFile('./files/hello.txt', (err, data) => {
    if (err) {
        console.log('ERROR');
    }
    console.log('Async: ' + data.toString());
});

const file = fs.readFileSync('./files/hello.txt');
console.log('Sync: '+ file.toString());

/* fs.appendFile('./files/hello.txt', 'I\'m a Web Developer', (err, data) => {
    if (err) {
        console.log('ERROR');
    }    
}); */

fs.writeFile('./files/bye.txt', 'Sad to see you go', (err, data) => {
    if (err) {
        console.log('ERROR');
    }
});

fs.unlink('./files/bye.txt', err => {
    if (err) {
        console.log(err);
    }
    console.log('Inception');
});