const divCalculadora = document.getElementById("calculadora");

const visor = criarDivVisor();

const botoes = criarDivBotoes();

criarBotao('C', 'clear');
criarBotao('---', 'null');
criarBotao('---', 'null');
criarBotao('+', 'op');
criarBotao('1', 'num');
criarBotao('2', 'num');
criarBotao('3', 'num');
criarBotao('-', 'op');
criarBotao('4', 'num');
criarBotao('5', 'num');
criarBotao('6', 'num');
criarBotao('/', 'op');
criarBotao('7', 'num');
criarBotao('8', 'num');
criarBotao('9', 'num');
criarBotao('*', 'op');
criarBotao('0', 'num');
criarBotao('.', 'num');
criarBotao('=', 'igual');

document.addEventListener('click', (event) => {
    if(event.target.tagName === 'BUTTON'){
        if(event.target.className == "clear"){
            visor.textContent = "";
        } else if(event.target.className == "igual"){
            realizarOperacao();
        }else{
            if(verificarSeHaOp()){
                if(event.target.className != "op"){
                    visor.textContent += event.target.textContent;
                }
            } else{
                visor.textContent += event.target.textContent;
            }
        }
    }
})

function criarDivBotoes(){
    const botoes = document.createElement('div');
    botoes.className = "botoes";
    divCalculadora.appendChild(botoes);
    return botoes;
}

function criarBotao(digito, tipo){
    const btn = document.createElement('button');
    btn.innerText = digito;
    btn.className = tipo;
    botoes.appendChild(btn);
}

function criarDivVisor(){
    const visor = document.createElement('div');
    visor.className = "visor";
    divCalculadora.appendChild(visor);
    return visor;
}

function verificarSeHaOp(){
    const textoVisor = visor.innerText;
    for(let i = 0; i < textoVisor.length; i++){
        if(textoVisor[i] == '+' || textoVisor[i] == '-' || textoVisor[i] == "/" || textoVisor[i] == "*"){
            return true;
        }
    }
    return false;
}

function realizarOperacao(){
    const textoVisor = visor.innerText;
    let op;
    for(let i = 0; i < textoVisor.length; i++){
        if(textoVisor[i] == '+' || textoVisor[i] == '-' || textoVisor[i] == "/" || textoVisor[i] == "*"){
            op = textoVisor[i];
        }
    }
    let numeros = textoVisor.split(op);
    numeros = numeros.map(elemento => parseFloat(elemento));
    if(op == "+"){
        visor.innerText = numeros[0] + numeros[1];
    } else if(op == "-"){
        visor.innerText = numeros[0] - numeros[1];
    } else if(op == "*"){
        visor.innerText = numeros[0] * numeros[1];
    } else if(op == "/"){
        visor.innerText = numeros[0] / numeros[1];
    }
}