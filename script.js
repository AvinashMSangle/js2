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
function reverseString(sentence){
    const sentenceArr=sentence.split("");
    const sentenceArr.reverse();
    return sentenceArr.join("");
}
const x =reverseString("hello");
console.log(x);

 
