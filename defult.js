// function add(num1, num2){
  
//     if(num2 == undefined){
//         num2 = 0;
//     }
//       return num1 + num2
// }
// const total = add(14);
// console.log(total);

                  // another function use 
// function add(num1, num2){
//     num2 = num2 || 10;
//     return num1 + num2;
    
// }
// const total =add(15);
// console.log(total);
    //   more another functin use 
    function add(num1, num2 = 10){
        num2 = num2 || 0;
        return num1 + num2;
        
    }
    const total =add(15,1);
    console.log(total);