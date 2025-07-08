/**
 *          *
            **
            ***
            ****
            *****

*/

let row = 5;
let col = 5;

for(let i=0; i<row; i++){
    let line = '*';
    
    for(let j=0; j<i; j++){
        line += '*';
    }
    
    console.log(line);
}