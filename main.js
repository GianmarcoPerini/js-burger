
let check = document.getElementsByClassName("box");




document.addEventListener("click", function(){

    for(i = 0; i < check.length; i++){
        if(check[i].checked == true){
            console.log(check.value);
        }
    }

})