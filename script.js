document.querySelectorAll(".semana").forEach(elemento => {
    elemento.addEventListener("click", function(){
        let pai = this.parentElement;
        let filhos = pai.children;

        if(filhos.length > 0 && filhos[1].style.display == "none"){
            filhos[1].style.display = "block";
        } else{
            filhos[1].style.display = "none";
        }
    });
});