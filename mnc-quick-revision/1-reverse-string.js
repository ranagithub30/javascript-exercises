/** Reverse a string with reverse() method & without method. */

// Using reverse() method

let str = "This string to be Reversed";
console.log(str.split("").reverse().join(""));

// Without using reverse() method

let str1 = "This string to be Reversed";

function revStr(str1){
    let i=0;
    let rev = "";
    
    for(i=(str1.length - 1); i>=0; i--){
        rev += str1[i];
    }    
    
    return rev;
}

console.log(revStr(str1));

/** O/P - desreveR eb ot gnirts sihT */