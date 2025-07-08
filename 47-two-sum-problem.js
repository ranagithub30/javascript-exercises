/** 
 * Given an array and a target, return indices of two numbers such that they add up to the target.
 * 
 * let arr = [1, 2, 6, 9, 3, 2, 8, 7];
   let resultNumber = 10;

    Sample Output:
    [ [ 0, 3 ], [ 1, 6 ], [ 4, 7 ], [ 5, 6 ] ]
*/

let arr = [1,2,6,9,3,2,8,7];
let resultNumber = 10;
let indexes = [];
let addNo = 0;

for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        addNo = arr[i]+arr[j];
        
        if(addNo == resultNumber){
            indexes.push([i, j]);
        }
    }
    
}

console.log(indexes);