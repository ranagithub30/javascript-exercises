/**
 *                     *********
                        *******
                         *****
                          ***
                           *

 * 
*/



let row = 5;

for (let i = row; i > 0; i--) {
    let line = '';

    // Print leading spaces
    for (let j = row; j > i; j--) {
        line += ' ';
    }

    // Print stars
    for (let k = 1; k <= (2 * i - 1); k++) {
        line += '*';
    }

    console.log(line);
}
