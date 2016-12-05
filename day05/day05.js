'use strict';

const fs = require('fs');
const crypto = require('crypto');

let input = fs.readFileSync('input.txt', 'utf8');

let password = '';
let index = 0;
while (password.length < 8) {
    const hash = crypto.createHash('md5');
    hash.update(input + index);
    let digest = hash.digest('hex');
    if(digest.substring(0, 5) === '00000') {
        password += digest[5];
    }
    index++;
}

console.log(password);
