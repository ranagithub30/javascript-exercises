/**
 *              *
               **
              ***
             ****
            *****

*/


let row = 5;
let col = 5;

for(let i=0; i<row; i++){
    let line = '';
    
    for(let j=0; j<= (col-i); j++){
        line += ' ';
    }
    
    for(let k=1; k<=i; k++){
        line += '*';
    }
    
    console.log(line);
}