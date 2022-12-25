const input = document.querySelector('.input');
// input.setAttribute('readonly', 'readony');
let counter = 0;
let TotalCounter = document.querySelector('.totalCharacters')
let remainingCharacters = document.querySelector('.text');
// remainingCharacters.innerText =`Remaining: ${50}`;
let updateRemainder;
console.log(remainingCharacters)
input.addEventListener('keyup', (e)=>{
updateCounter();
if(e.key == 'Backspace'){
    
    counterNum = counter-3;
    TotalCounter.innerText = `Total Characters: ${counterNum}`;
}
if(updateRemainder <='0'){
   
    input.setAttribute('readonly', 'readonly');
   TotalCounter.innerText = `total character : You reached the maximum`;
   remainingCharacters.innerText = `Remaining : 0`;

}

});
function updateCounter(){
    if(!input){
        counter =0;
    }
    else{
        let counterNum = counter++;
        
     TotalCounter.innerText = `total characters : ${counterNum}`;
     updateRemainder= 50 - counterNum;
     console.log();
     remainingCharacters.innerText = `Remaining: ${updateRemainder}`;
    
     
}

}