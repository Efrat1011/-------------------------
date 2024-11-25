 //task 1

/* let season = +prompt("1-ден 12-ге дейінгі санды енгізіңіз: ")
let san = 0
switch (season) {
    case 12 || 1 || 2:
        alert("Ай: " + season + "Маусым: Winter")
        break;
    case 3 || 4 || 5:
        alert("Ай: " + season + "Маусым: Spring")
        break;

    case 6 || 7 || 8:
        alert("Ай: " + season + "Маусым: Summer")
        break;
    case 9 ||10 || 11:
        alert("Ай: " + season + "Маусым: Autumn")
        break;

         default:
            alert("1 жыл 12 айдан тұрады 1 - ден 12- ге дейін сан еңгіз")
    
}   */
 
// Task 2
 
/* let a = +prompt("a санын енгізіңіз: ")
let b = +prompt("b санын енгізіңіз: ")

if (a<b) {
   alert("a саны b санынан кіші ")}

else if (a>b){
    alert( "a саны b санынан үлкен ")
}   
 else {
    alert("a саны b санына тең")    
} 
alert("a және b сандарының орташа мәні: " + (a+b)/2 ) */

// Task 3

let num1 = +prompt("Бірінші санды енгізіңіз: ")
let num2 = +prompt("Екінші санды енгізіңіз: ")
let num3 = +prompt("Үшінші санды енгізіңіз: ")

let max;
let min;

 if(num1>=num2 && num1>=num3){
    max=num1
 }else if(num2>=num1 && num2>=num3){
    max=num2
 }
 else if(num3>=num1 && num3>=num2){
    max=num3
 }
 if(num1<=num2 && num1<=num3){
    min=num1
 }else if(num2<=num1 && num2<=num3){
    min=num2
 }
 else if(num3<=num1 && num3<=num2){
    min=num3
 }

 
 alert("Ең үлкен және ең кіші сандың айырмасы: " +(max-min) )

 let num =  55;

 
 function sandar() {
     while(true){
         let san = +prompt("Сан енгізіңіз: ")
     if(num == san){
       alert("Керемет сіз санды таптыңыз!")
     }else if(san < 0 || san > 100){
         alert("Қүып кеттіңіз!")
     }else if (num-10<=san && san<=num+10){
         alert("Сіз жақындап қалдыңыз: " )
     }else{
         alert("Сіз алыстап кеттіңіз! ")
     }
     }
 
 }
 
 
 sandar();