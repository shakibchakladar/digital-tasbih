// subahanallah sectiion
const subahanallahDisplay = document.getElementById('subahan-allah-display')
let subahanallahInitialValue = 0;
// subahanallah incriment
document.getElementById('subahan-allah-incriment-btn').addEventListener('click', function () {
    subahanallahInitialValue=subahanallahInitialValue+1;
    //    console.log(subahanallahInci)
    subahanallahDisplay.innerText = subahanallahInitialValue;
    if (subahanallahInitialValue===34) {
        alert('already you count 33 times')
        subahanallahDisplay.innerText=33;
    }
})
// subahanallah decriment
document.getElementById('subahan-allah-decrement-btn').addEventListener('click', function () {
    subahanallahInitialValue-= 1;
    subahanallahDisplay.innerText=subahanallahInitialValue;
    if(subahanallahInitialValue<0){
        alert('nothing to decriment')
        subahanallahDisplay.innerText=0;
    }
})

// alhamdulillah section
let alhamdulillahInitialValue=0;
const alhamdulillahDisplay=document.getElementById('Alhamdulillah-display');
const alhamdulillahIncri=document.getElementById('Alhamdulillah-incriment-btn');
const alhamdulillahDecre=document.getElementById('Alhamdulillah-decrement-btn');
// alhmdulillah incriment
alhamdulillahIncri.addEventListener('click', function(){
  alhamdulillahInitialValue+=1;
  alhamdulillahDisplay.innerText=alhamdulillahInitialValue;
  if(alhamdulillahInitialValue===34){
    alert('Alhamdulillah 33 time done')
    alhamdulillahDisplay.innerText=33;
  }
})
// alhamdulillah decrement
alhamdulillahDecre.addEventListener('click', function(){
    alhamdulillahInitialValue-=1;
    alhamdulillahDisplay.innerText=alhamdulillahInitialValue;
    if(alhamdulillahInitialValue<0){
        alert('alhamdulillah count 0')
        alhamdulillahDisplay.innerText=0;
    }
})

// allahu akbar section...........................................
const allahuAkbarDisplay=document.getElementById('allahuakbar-display');
const allahuAkbarIncri=document.getElementById('Allah-akbar-incriment-btn');
const allahuAkbarDecre=document.getElementById('Allahu-akbar-decriment-btn');
let allahuakbarInitialValue=0;
// allahuakbar incriment btn
allahuAkbarIncri.addEventListener('click', function(){
    allahuakbarInitialValue+=1;
    allahuAkbarDisplay.innerText=allahuakbarInitialValue;
    if(allahuakbarInitialValue===34){
        alert('already allahu akbar counts 33 times')
        allahuAkbarDisplay.innerText=0;
    }
})
// allahuakbar decre 
allahuAkbarDecre.addEventListener('click', function(){
    allahuakbarInitialValue-=1;
    allahuAkbarDisplay.innerText=allahuakbarInitialValue
    if(allahuakbarInitialValue<0){
        alert('allahu akbar counts 0')
        allahuAkbarDisplay.innerText=0;
    }
})

// reset btn
 const resetBtn=document.getElementById('reset-btn');
 resetBtn.addEventListener('click', function(){
    subahanallahDisplay.innerText=0;
    alhamdulillahDisplay.innerText=0;
    allahuAkbarDisplay.innerText=0;
 })