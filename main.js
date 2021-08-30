let check = document.getElementsByClassName("box");
let calcolo = document.querySelector("button")
let sconto = document.getElementsByClassName("coupon");
let ingredienti = []
let prezzoFinale = 0
let somma = 0



UncheckAll()

for(let i = 0; i < check.length; i++){
    let checkBox = check[i]
    checkBox.addEventListener("click", function(){
        if(checkBox.checked == true){
            let num = parseFloat(checkBox.value)
            ingredienti.push(num)
            console.log(ingredienti)
        }else{
            ingredienti.pop()
        }
    })
}

calcolo.addEventListener("click", function(){
    for(let x = 0; x < ingredienti.length; x++){
        somma += ingredienti[x]
    }
    prezzoFinale = somma + 4.5
    document.getElementById("prezzo-finale").innerHTML = prezzoFinale
})








function UncheckAll(){ 
    var w = document.getElementsByClassName('box'); 
    for(var i = 0; i < w.length; i++){ 
        if(w[i].type == 'checkbox'){ 
        w[i].checked = false; 
        }
    }
} 