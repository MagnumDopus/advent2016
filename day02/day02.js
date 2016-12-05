'use strict';

let fs = require('fs');

let input = fs.readFileSync('input.txt', 'utf8').split('\n');

let x = 1, y = 1;
let code = '';

for (let line of input) {
    for (let step of line) {
        switch (step) {
            case 'U':
                if (y > 0) y--;
                break;
            case 'D':
                if (y < 2) y++;
                break;
            case 'L':
                if (x > 0) x--;
                break;
            case 'R':
                if (x < 2) x++;
                break;
        }
    }
    code += ((x + 1) + (y * 3)).toString();
}
console.log(code);
