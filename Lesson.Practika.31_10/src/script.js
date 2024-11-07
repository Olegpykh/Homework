
let rate = 72000;


function exchange() {
   let money = document.querySelector(".input-1").value;

   let result = money / rate;

   document.querySelector(".result").innerText = money + "$ = " + result + "BTC"
    
};



