let divContador = document.getElementById('contador');

// Div titulos
let divTitulo = document.createElement('div');
divTitulo.id = "wrapTitulo";

// Criar título
let tituloTotal = document.createElement('h1');
tituloTotal.textContent = "Total";
tituloTotal.id = "tituloTotal";
divTitulo.appendChild(tituloTotal);

// Contador total
let contadorTotal = document.createElement('input');
contadorTotal.id = 'contadorTotal';
contadorTotal.disabled = true;
contadorTotal.value = "0";
divTitulo.appendChild(contadorTotal);

// Div contadores
let contadores = document.createElement('div');
contadores.id = "wrapContadores";

// Contador homem
let contadorHomem = document.createElement('input');
let tituloHomem = document.createElement('h2');
tituloHomem.innerText = "Homens";
contadorHomem.id = 'contadorHomem';
contadorHomem.value = "0";
contadorHomem.disabled = true;

// Contador mulher
let contadorMulher = document.createElement('input');
let tituloMulher = document.createElement('h2');
tituloMulher.innerText = "Mulheres";
contadorMulher.id = 'contadorMulher';
contadorMulher.value = "0";
contadorMulher.disabled = true;

// Criar botão de resetar
let resetBtn = document.createElement('button');
resetBtn.textContent = "limpar";
resetBtn.id = "resetBtn";
resetBtn.type = "reset";
divTitulo.appendChild(resetBtn);

divContador.appendChild(divTitulo);

// Criar botão aumentar
let aumentarHBtn = document.createElement('button');
aumentarHBtn.textContent = "+";
aumentarHBtn.className = 'aumentar';

let aumentarMBtn = document.createElement('button');
aumentarMBtn.textContent = "+";
aumentarMBtn.className = 'aumentar';

// Criar botão diminuir
let diminuirHBtn = document.createElement('button');
diminuirHBtn.textContent = "-";
diminuirHBtn.className = 'diminuir';

let diminuirMBtn = document.createElement('button');
diminuirMBtn.textContent = "-";
diminuirMBtn.className = 'diminuir';

// Criar div homem
let divHomem = document.createElement('div');
divHomem.id = "divHomem";
divHomem.appendChild(aumentarHBtn);
divHomem.appendChild(diminuirHBtn);
divHomem.appendChild(tituloHomem);
divHomem.appendChild(contadorHomem);
contadores.appendChild(divHomem);

// Criar div mulher
let divMulher = document.createElement('div');
divMulher.id = "divMulher";
divMulher.appendChild(aumentarMBtn);
divMulher.appendChild(diminuirMBtn);
divMulher.appendChild(tituloMulher);
divMulher.appendChild(contadorMulher);
contadores.appendChild(divMulher);

divContador.appendChild(contadores);

// Processamento
aumentarHBtn.addEventListener("click", () => {
    let c = contadorHomem.value;
    let total = contadorTotal.value;
    total = parseInt(total);
    total = total + 1;
    c = parseInt(c);
    c = c + 1;
    contadorHomem.value = c;
    contadorTotal.value = total;
});

aumentarMBtn.addEventListener("click", () => {
    let c = contadorMulher.value;
    let total = contadorTotal.value;
    total = parseInt(total);
    total = total + 1;
    c = parseInt(c);
    c = c + 1;
    contadorMulher.value = c;
    contadorTotal.value = total;
});

diminuirHBtn.addEventListener("click", () => {
    let c = contadorHomem.value;
    if(c > 0){
        let total = contadorTotal.value;
        total = parseInt(total);
        total = total - 1;
        c = parseInt(c);
        c = c - 1;
        contadorHomem.value = c;
        contadorTotal.value = total;
    }
});

diminuirMBtn.addEventListener("click", () => {
    let c = contadorMulher.value;
    if(c > 0){
        let total = contadorTotal.value;
        total = parseInt(total);
        total = total - 1;
        c = parseInt(c);
        c = c - 1;
        contadorMulher.value = c;
        contadorTotal.value = total;
    }
});

resetBtn.addEventListener("click", () => {
    contadorMulher.value = "0";
    contadorHomem.value = "0";
    contadorTotal.value = "0";
});