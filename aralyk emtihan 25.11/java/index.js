// let san1 = +prompt("1-ші санды енгізіңіз")

// let san2 = +prompt("2-ші санды енгізіңіз")

// function calculator(san1,san2) {
//     if(isNaN(san1) && isNaN(san2)){
//         return "Қате жаздыңыз"
//     }else{
//         return (san1+san2),(san1-san2),(san1*san2),(san1/san2);
//     }

// }

// alert(calculator(san1,san2)+
// " Kosu " +(san1+san2)+ 
// '/n' + 
// " Azaitu " +(san1-san2)+
//  '/n' + 
//  " kobeitu " +(san1*san2)+ 
//  '/n'+ 
//  " bolu "+(san1/san2))




//  let zat = prompt("1-ші санды енгізіңіз")

//  let baga = +prompt("2-ші санды енгізіңіз")




 let num =  50;

 
 function sandar() {
     while(true){
         let san = +prompt("Сан енгізіңіз: ")
     if(num == san){
       alert("Керемет сіз санды таптыңыз!")
     }else if(san < 0 || san > 100){
         alert("Қүып кеттіңіз!")
     } 
     
     else if (num-5<=san && san<=num+5 ){
         alert(" Сіз жақындап қалдыңыз:  " )
     }
    
     else{
         alert("Сіз алыстап кеттіңіз! ")
     }
     }
 
 }
 sandar();