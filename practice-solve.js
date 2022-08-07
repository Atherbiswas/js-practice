// Problem-1: Return the sum of two numbers
function add(a , b){
    console.log(a , b);
    var sum = a + b;
    return sum;
}
var total = add(25, 30);
console.log(total);


// Problem-2: Convert minuties into second
function minuties(x){
    console.log(x);
    let seconds = x * 60;
    return seconds;
}
let result = minuties(20);
console.log(result);


// Problem-3: Return the Next Number from the integer
function addition(num){
    console.log(num);
    var num2 = num + 1;
    return num2;
}
console.log(addition(12))



// Problem-4: Area of Tringle
function triArea(base, height){
    console.log(base, height);
    let totalArea = (base * height) / 2;
    return totalArea;
}
console.log(triArea(7, 4));



// problem-5: Return the first element in an Arry
function getFirstValue(arr){
    console.log(arr);
    var firstValue = arr[0];
    return firstValue;
}
var myArry = [1,2,3,4];
console.log(getFirstValue(myArry));



// Problem-6: Is the number less than or equal to any number
function checkNumber(num){
    console.log(num);
    if(num <= 10){
        return true;
    }
    else{
        return false;
    }
}
console.log(checkNumber(10));



// Problem-7: Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function towNumber(num1, num2){
    console.log(num1, num2);
    var totalSum = num1 + num2;
    if(totalSum < 100){
        return true;
    }
    else{
        return false;
    }
}
console.log(towNumber(50 , 60));



// Problem-8: Create a function that returns true when num1 is equal to num2.other wise return false.
function numbers(a , b){
    console.log(a ,b);
    if(a === b){
        return true;
    }
    else{
        return false;
    }
}
console.log(numbers(100, 100));


// Problem-9: Practice problem of about GPA

var allNumber = [95, 66, 80, 59, 47, 77];
for (i = 0; i < allNumber.length; i++){
    if(allNumber[i] >= 90){
        console.log('Grade A+');
    }
    else if(allNumber[i] >= 80){
        console.log('Grade A');
    }
    else if(allNumber[i] >= 70){
        console.log('Grade B');
    }
    else if(allNumber[i] >= 60){
        console.log('Grade C');
    }
    else if(allNumber[i] >= 50){
        console.log('Grade D');
    }
    else{
        console.log('Grade F');
    }
}

// Problem-10: Write a JS code to print Even numbers in given array

function printEven(isArry){
    for(var i = 0; i < isArry.length; i++){
        if(isArry[i] % 2 == 0){
            console.log(isArry[i]);
        }
    }
}
printEven([20,35,40,45,60,90,100,105]);

// Problem-11: Read in 3 numbers and display the larger.

function getLargeNumber(num1, num2, num3){
    console.log(num1, num2, num3);
    if(num1 > num2 && num1 > num3){
        console.log('num1 is the largest number');
    }
    else if(num2 > num1 && num2 > num3){
        console.log('num2 is the largest number');
    }
    else{
        console.log('num3 is the largest number');
    }
}
getLargeNumber(100,70,20);

// Problem-12: Write a JS code(has return) to print average number of your assignment

function getAverage(assignment1,assignment2,assignment3){
    const total = assignment1 + assignment2 + assignment3;
    const average = total/3;
    return average;
}
const myAverage = getAverage(60,58,60);
console.log(myAverage);




