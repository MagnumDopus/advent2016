
'use strict';

let input = "R4, R3, R5, L3, L5, R2, L2, R5, L2, R5, R5, R5, R1, R3, L2, L2, L1, R5, L3, R1, L2, R1, L3, L5, L1, R3, L4, R2, R4, L3, L1, R4, L4, R3, L5, L3, R188, R4, L1, R48, L5, R4, R71, R3, L2, R188, L3, R2, L3, R3, L5, L1, R1, L2, L4, L2, R5, L3, R3, R3, R4, L3, L4, R5, L4, L4, R3, R4, L4, R1, L3, L1, L1, R4, R1, L4, R1, L1, L3, R2, L2, R2, L1, R5, R3, R4, L5, R2, R5, L5, R1, R2, L1, L3, R3, R1, R3, L4, R4, L4, L1, R1, L2, L2, L4, R1, L3, R4, L2, R3, L1, L5, R4, R5, R2, R5, R1, R5, R1, R3, L3, L2, L2, L5, R2, L2, R5, R5, L2, R3, L5, R5, L2, R4, R2, L1, R3, L5, R3, R2, R5, L1, R3, L2, R2, R1";

let x = 0;
let y = 0;

let dir = 0;

let instructions = input.replace(/\s/g, "").split(',');

for(let instr of instructions) {
    if(instr.substring(0, 1) === 'L') {
        if(dir === 0) {
            dir = 3;
        } else {
            dir--;
        }
    } else {
        if(dir === 3) {
            dir = 0;
        } else {
            dir++;
        }
    }
    let dist = parseInt(instr.substring(1));
    if((dir % 2) === 0) {
        y = (dir === 0 ? y + dist : y - dist);
    } else {
        x = (dir === 1 ? x + dist : x - dist);
    }
}

console.log('x: ', x, ' y: ', y, ' total dist: ', Math.abs(x) + Math.abs(y));
