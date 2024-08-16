// const cartoon =["doremon","chota bheem","ben 10"];
// cartoon[1]="richie rich";
// console.log(cartoon);

// /*1*/function isEmpty(array){
//     if(array.length ===0){
//         return true;
//     }else{
//         return false;
//     }
// }
// //OR//

// /*2*/function isEmpty(array){
//     if(array.length===0)return true;

//     return false;
// }

// //OR//
// /*3*/function isEmpty(array){
//     return array.length===0;
// }

// function isLengthy(string){
//         if (string.length>=5)return true;

//         return false;
//   }

//   console.log(isLengthy("aaavdjfjfjds"));

// function isLengthyAndA(str){
//     if (str.length>=5 && str.includes("a") )return true;

//     return false;
// }

// console.log(isLengthyAndA("fjjfjjvdjfjfjds"));

// function isLengthyAndA(str){
//     if (str.length>=5 || str.includes("a") )return true;

//     return false;
// }

// console.log(isLengthyAndA("fjja"));

// //TODO: Array METHODS
// //from string to array
// const x = "apple,cider,vinegar";
// console.log(x.split(","));
// //from array to string
// const y = ["hey","bye"];
// console.log(y.join(""));

/*
step1:create function that takes in a string
step2:convert string to array
step3:reverse the array
step4:convert array back to string
step5:return the string
*/
// function reverseString(sentence) {
//   const sentenceArr = sentence.split("");
//   sentenceArr.reverse();
//   return sentenceArr.join("");
// }
// const x = reverseString("Avinash");
// console.log(x);

////////////////////////JS2.1////////////////////////
// console.log(reverseNum(567474758585));

// function reverseNum(num){
//     const strNum=String(num);
//     const numArr=strNum.split("");
//     const reverseArr= numArr.reverse().join("");
//     return reverseArr;
// }


/*function reverseNum(num,keepsign){
    // num=Math.abs(num);
    const strNum=String(num);
    const numArr=strNum.split("");
    const reverseArr=numArr.reverse().join("");
    const nigNum= parseFloat(reverseArr);
    // if(keepsign){
    //             return parseFloat(reverseArr)*Math.sign(num);
    //         }else{
    //             return parseFloat(reverseArr);
    //         }
    return keepsign ? nigNum*Math.sign(num):nigNum;
    
}
console.log(reverseNum(-7706,false));
console.log(reverseNum(5387));
console.log(reverseNum(-7706,true));
*/

/////////////loops///////////////////////
// for(var i=0; i<=100; i++){
//     console.log(i);
    
// }

// for(var i=0; i<=20; i+=2){
//     if(i!=18)
//         console.log(i);  
//     }

// const fruits = [Apple,Banana,Orange,Mango,Grapes,Kiwi]

// for( let i=0; i<=fruits.length; i++){
//     const fruit= fruits[i];
//     console.log(capitalize(fruit));
// }
// function  capitalize(string)

// function printEveryNum(number){
//     const numString = String(number);

//     for(let i =0; i< numString.length; i++){
//         console.log(numString[i]);
//         }
// }
// printEveryNum(65868976);

function sumOfNums(number){
    let counter = 0;
    for(let i = 0; i<number.length; i++){
        counter += number[i]
    }
    return counter;
}

const x = sumOfNums([1,2,3,45,7,47,4]);
console.log(x);

