let check = document.getElementsByClassName("box");
let bottone = document.getElementById("btn")
let scontoCoupon = ["SUPERSCONTO2021","CICCIOELONTO","PANINATOCUP21"]
let ingredientiPrezzo = []
let somma = 0

UncheckAll()

for(let i = 0; i < check.length; i++){
    let checkBox = check[i]
    checkBox.addEventListener("click", function(){
        if(checkBox.checked == true){
            let num = parseFloat(checkBox.value)
            ingredientiPrezzo.push(num)
            console.log(ingredientiPrezzo)
        }else{
            ingredientiPrezzo.pop()
        }
    })
}

bottone.addEventListener("click", function(){
    let sconti = document.getElementById("cupon").value;
    let prezzoPieno = somma + 5
    let prezzoScontato = (somma + 5) * 0.8


    for(let x = 0; x < ingredientiPrezzo.length; x++){
        somma += ingredientiPrezzo[x]
    }
    if(scontoCoupon.includes(sconti)){
        document.getElementById("prezzo-finale").innerHTML = prezzoScontato.toFixed(2)
    } else{
        document.getElementById("prezzo-finale").innerHTML = prezzoPieno.toFixed(2)
    }
})

function UncheckAll(){  
    for(let i = 0; i < check.length; i++){ 
        if(check[i].type == 'checkbox'){ 
        check[i].checked = false; 
        }
    }
} 