///////////Q1///////create function for months//
/*function months(month){
    month = Number(month);
    if(month==1){
        console.log("Jan");
    }else if(month==2){
        console.log("Feb");
    }else if(month==3){
        console.log("Mar");
    }else if(month==4){
        console.log("Apr");
    }else if(month==5){
        console.log("May");
    }else if(month==6){
        console.log("Jun");
    }else if(month==7){
        console.log("Jul");
    }else if(month==8){
        console.log("Aug");
    }else if(month==9){
        console.log("Sep");
    }else if(month==10){
        console.log("Oct");
    }else if(month==11){
        console.log("Nov");
    }else if(month==12){
        console.log("Dec");
    }else {
        console.log("invalid month");}
}
months(12);
*/
//or//










/////Q2/////edabit//
// const x=[1,2,3,4];

// x.push("A");

// x.unshift("jack");

// console.log(x);

/*const menu={
    vada_pav:"Rs20",
    pani_puri:"Rs20",
    shev_puri:"Rs30"
}
// const keys =Object.keys(menu);

// for(let i=0; i<keys.length; i++){
//     const key =keys[i];
//     const value =menu[key];
//     const str = `The price of ${key} is ${value}`;
//     console.log(str);
//     }
 for(let key in menu){
    const value =menu[key];
    const tax=Number(value.slice(1))+1; 
    console.log(`The price of ${key} is $${tax}`);
 }
*/

// function remove$(str){
//     let x = str.slice(1).replace(",","");
//     return parseInt(x);
//  }
//  console.log(remove$("$5,446"));

// function itemsPurchased(store,wallet){
//     //creating empty list
//     const filteredItems = [];
    
//     //converting wallet to a num
//     wallet = remove$(wallet);

//     //iterating over store items
//     for(let item in store){
//         if(remove$(store[item]) <= wallet){
//             filteredItems.push(item);
//         }
//     }
//     return filteredItems.length > 0 ? filteredItems.sort(): "Nothing";
// }

///////////////Q3//////////edabit///



function move(char,step){

    const alphabates = "abcdefghijklmnopqrstuvwxyz";
    const idxchar = alphabates.indexOf(char);
    let finalIdx =  idxchar + step;

    if(finalIdx > 25){
        finalIdx = finalIdx%26;
    }
    const finalChar = alphabates[finalIdx];
    return finalChar

}
const x = move("S",100);
console.log(x);

    










 