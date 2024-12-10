// question 1 solution 

function calculateDifference(num1, num2,){
    if (typeof (num1,num2) == "number") {
        return (Math.abs(num2-num1)); 
    }else{
       return console.log('Invalid , the input value is not a number');      
    }
}

console.log(calculateDifference(100,250));


// question 2 solution

function isOdd(number){
    if (number %2 == 0) {
        return false;
    }else{
        return true;
    }
}

console.log(isOdd(27));



// question 3 solution 

function findMin(numArr){
    return(Math.min(...numArr));
}

console.log(findMin([15,78,7,14,68]));



// question 4 solution 

function filterEvenNumbers(newEvenArr){
    let evenNumber = [];
    for (const num of newEvenArr) {
        if (num % 2 === 0) {
            evenNumber.push(num);
        } 
    }

    return evenNumber;
}

console.log(filterEvenNumbers([24,87,14,64,25,69,60]));


// question 5 solution 

function sortArrayDescending(desArr){
    let newDesArr = desArr.sort((a, b)=>{return b - a});
    return newDesArr;
}

console.log(sortArrayDescending([35,13,67,12,33,46]));


// question 6 solution 

function lowercaseFirstLetter(lowerFL){
 
    return lowerFL[0].toLowerCase() + lowerFL.slice(1);
}

console.log(lowercaseFirstLetter('Learning'));


// question 7 solution 
function findAverage(aveArr){
    let total = 0;
    aveArr.forEach((el) => total += el);
    let average = total / (aveArr.length);
return average;
}

console.log(findAverage([23,34,53,7,20,6,32]));


// question 8 solution 
function isLeapyear(year){
    if(year % 400 == 0) return true;
    if(year % 100 == 0) return false;
    if(year % 4 == 0) return true;

    return false;
}

console.log(isLeapyear(2024));