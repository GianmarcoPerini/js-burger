let check = document.getElementsByClassName("box");
let scontoCoupon = ["pino","2","3"]
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



let btn = document.querySelector("button")
btn.addEventListener("click", function(){
    for(let x = 0; x < ingredientiPrezzo.length; x++){
        somma += ingredientiPrezzo[x]
    }

    let sconto = document.getElementById("coupon").value;
    console.log(sconto);

    // if(scontoCoupon.includes(sconto)){
    //     document.getElementById("prezzo-finale").innerHTML = (somma + 5) * 0.08
    // } else{
    //     document.getElementById("prezzo-finale").innerHTML = somma + 5
    // }

    document.getElementById("prezzo-finale").innerHTML = somma + 5



    
    
})








function UncheckAll(){ 
    var w = document.getElementsByClassName('box'); 
    for(var i = 0; i < w.length; i++){ 
        if(w[i].type == 'checkbox'){ 
        w[i].checked = false; 
        }
    }
} 