/**
 *                   *
                    ***
                   *****
                  *******
                 *********

*/


let row = 5;

for (let i = 1; i <= row; i++) {
    let line = '';

    // Print leading spaces
    for (let j = 1; j <= row - i; j++) {
        line += ' ';
    }

    // Print stars
    for (let k = 1; k <= (2 * i - 1); k++) {
        line += '*';
    }

    console.log(line);
}