// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

/**
 * 
 * Essentially here we want to write a function that goes through all the numbers 1000 - 1
 * 
 * for(let i = 0;i<1000;i++){
 * }
 */

 const findMultiplesSum = (multiplesUpToThisNumber,sum=0) => {

    for(let i = 1;i<multiplesUpToThisNumber;i++){
        if(i%3=== 0  && i%5 === 0){
            sum += i
            continue
        }else if(i%3=== 0 && i%5 !== 0){
            sum += i
        }else if(i%3!== 0 && i%5 === 0){
            sum += i
        }
    }
    return sum
 }

 console.log(findMultiplesSum(1000))