let value = document.getElementsByClassName('box');
let btn = document.querySelector('button');
let txt = document.getElementById('codici');
let listinoPrezzi = [];
let somma;
let prezzoPanino = 5;
let prezzoTotale;
let prezzoScontato;
let coupon = ["SUPERSCONTO2021","CICCIOELONTO","PANINATOCUP21"];
console.log(coupon);

UncheckAll()
btn.addEventListener('click', function(){
    somma = 0;
    for(let x = 0; x < listinoPrezzi.length; x++){
        somma += listinoPrezzi[x] 
    }
    prezzoTotale = somma + prezzoPanino;
    prezzoScontato = prezzoTotale * 0.85
    if(coupon.includes(txt.value)){
        document.getElementById("prezzo-finale").innerHTML = prezzoScontato.toFixed(2)
    } else{
        document.getElementById("prezzo-finale").innerHTML = prezzoTotale.toFixed(2)
    }

    UncheckAll()
    if( listinoPrezzi.length){
        listinoPrezzi.length = 0
    }
})

for(let i = 0; i < value.length; i++){
    let takeValue = value[i]; 
    takeValue.addEventListener("click", function(){
        if(takeValue.checked == true){
            listinoPrezzi.push(parseFloat(takeValue.value))
            console.log(listinoPrezzi);
        }
    })
}



function UncheckAll(){  
    for(let i = 0; i < value.length; i++){ 
        if(value[i].type == 'checkbox'){ 
        value[i].checked = false; 
        }
    }
} 