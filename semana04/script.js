class Aluno {
    constructor(nome, email, dataNascimento, celular, curso, matricula) {
        this.nome = nome;
        this.email = email;
        this.dataNascimento = dataNascimento;
        this.celular = celular;
        this.curso = curso;
        this.matricula = matricula;
    }

    exibirInfo() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Email: ${this.email}`);
        console.log(`Data de Nascimento: ${this.dataNascimento}`);
        console.log(`Celular: ${this.celular}`);
        console.log(`Curso: ${this.curso}`);
        console.log(`Matrícula: ${this.matricula}`);
    }
}

class Professor {
    constructor(nome, email, dataNascimento, celular, area, matricula, lattes) {
        this.nome = nome;
        this.email = email;
        this.dataNascimento = dataNascimento;
        this.celular = celular;
        this.area = area;
        this.matricula = matricula;
        this.lattes = lattes;
    }

    exibirInfo() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Email: ${this.email}`);
        console.log(`Data de Nascimento: ${this.dataNascimento}`);
        console.log(`Celular: ${this.celular}`);
        console.log(`Área: ${this.area}`);
        console.log(`Matrícula: ${this.matricula}`);
        console.log(`Lattes: ${this.lattes}`);
    }
}

const radios = document.querySelectorAll('input[name="opcao"]');
const form = document.getElementById('form');
let selecionado = "";

radios.forEach(radio => {
    radio.addEventListener('change', function() {
      if (this.checked) {
        selecionado = this.value;

        if(selecionado == "aluno"){
            criarFormAluno();
            removerFormProfessor();
        } else if(selecionado == "professor"){
            criarFormProfessor();
            removerFormAluno();
        }
      }
    });
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
          selecionado = radios[i].value;
        }
      }

    if(selecionado == 'aluno'){
        preencherFormAluno();
    } else if(selecionado == "professor"){
        preencherFormProfessor();
    }
});

function criarFormAluno(){
    const divFormAluno = document.getElementById("form-aluno");

    divFormAluno.innerHTML = "";

    let labelCurso = document.createElement('label');
    let inputCurso = document.createElement('input');
    labelCurso.innerText = "Curso";
    inputCurso.id = "curso"

    let labelMatricula = document.createElement('label');
    let inputMatricula = document.createElement('input');
    labelMatricula.innerText = "Matricula";
    inputMatricula.id = "matricula"

    divFormAluno.appendChild(labelCurso);
    divFormAluno.appendChild(inputCurso);
    divFormAluno.appendChild(labelMatricula);
    divFormAluno.appendChild(inputMatricula);
}

function criarFormProfessor(){
    const divFormProfessor = document.getElementById("form-professor");

    divFormProfessor.innerHTML = "";

    let labelArea = document.createElement('label');
    let inputArea = document.createElement('input');
    labelArea.innerText = "Área";
    inputArea.id = "area";

    let labelMatricula = document.createElement('label');
    let inputMatricula = document.createElement('input');
    labelMatricula.innerText = "Matricula";
    inputMatricula.id = "matricula"

    let labelLattes = document.createElement('label');
    let inputLattes = document.createElement('input');
    labelLattes.innerText = "Lattes";
    inputLattes.id = "lattes"

    divFormProfessor.appendChild(labelArea);
    divFormProfessor.appendChild(inputArea);
    divFormProfessor.appendChild(labelMatricula);
    divFormProfessor.appendChild(inputMatricula);
    divFormProfessor.appendChild(labelLattes);
    divFormProfessor.appendChild(inputLattes);
}

function removerFormProfessor(){
    const divFormProfessor = document.getElementById("form-professor");

    divFormProfessor.innerHTML = "";
}

function removerFormAluno(){
    const divFormAluno = document.getElementById("form-aluno");

    divFormAluno.innerHTML = "";
}

function preencherFormAluno(){
    const inputNome = document.getElementById('nome');
    const inputEmail = document.getElementById('email');
    const inputNascimento = document.getElementById('data_nascimento');
    const inputNumeroCelular = document.getElementById('numero_celular');
    const inputCurso = document.getElementById('curso');
    const inputMatricula = document.getElementById('matricula');


    let a = new Aluno(inputNome.value, inputEmail.value, inputNascimento.value, inputNumeroCelular.value, inputCurso.value, inputMatricula.value);
    a.exibirInfo();
}

function preencherFormProfessor(){
    const inputNome = document.getElementById('nome');
    const inputEmail = document.getElementById('email');
    const inputNascimento = document.getElementById('data_nascimento');
    const inputNumeroCelular = document.getElementById('numero_celular');
    const inputArea = document.getElementById('area');
    const inputMatricula = document.getElementById('matricula');
    const inputLattes = document.getElementById('lattes');


    let p = new Professor(inputNome.value, inputEmail.value, inputNascimento.value, inputNumeroCelular.value, inputArea.value, inputMatricula.value, inputLattes.value);
    p.exibirInfo();
}