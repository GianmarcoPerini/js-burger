
let check = document.getElementsByClassName("box");
let calcolo = document.querySelector("button")
let ingredienti = []
let somma = 0

UncheckAll()

for(let i = 0; i < check.length; i++){
    let checkBox = check[i]
    checkBox.addEventListener("click", function(){
        if(checkBox.checked == true){
            let num = parseInt(checkBox.value)
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
    console.log(somma);

})







function UncheckAll(){ 
    var w = document.getElementsByClassName('box'); 
    for(var i = 0; i < w.length; i++){ 
        if(w[i].type=='checkbox'){ 
        w[i].checked = false; 
        }
    }
} 