let visor = document.getElementById("visor");
let apagar = document.getElementById("c");
let parenteseEsquerdo = document.getElementById("(");
let parenteseDireito = document.getElementById(")");
let divisao = document.getElementById("divisao");
let raiz = document.getElementById("raiz");
let multiplicacao = document.getElementById("multiplicacao");
let quadrado = document.getElementById("quadrado");
let menos = document.getElementById("-");
let igual = document.getElementById("=");
let virgula = document.getElementById(",");
let porcentagem = document.getElementById("%");
let mais = document.getElementById("+");

let zero = document.getElementById("0")
let um = document.getElementById("1");
let dois = document.getElementById("2");
let tres = document.getElementById("3");
let quatro = document.getElementById("4");
let cinco = document.getElementById("5");
let seis = document.getElementById("6");
let sete = document.getElementById("7");
let oito = document.getElementById("8");
let nove = document.getElementById("9");

apagar.addEventListener('click',() => teclando(apagar));
parenteseEsquerdo.addEventListener('click',() => teclando(parenteseEsquerdo));
parenteseDireito.addEventListener('click',() => teclando(parenteseDireito));
divisao.addEventListener('click',() => teclando(divisao));
raiz.addEventListener('click',() => teclando(raiz));
multiplicacao.addEventListener('click',() => teclando(multiplicacao));
quadrado.addEventListener('click',() => teclando(quadrado));
menos.addEventListener('click',() => teclando(menos));
igual.addEventListener('click',() => teclando(igual));
virgula.addEventListener('click',() => teclando(virgula));
porcentagem.addEventListener('click',() => teclando(porcentagem));
mais.addEventListener('click',() => teclando(mais));

zero.addEventListener('click', () => teclando(zero));
um.addEventListener('click',() => teclando(um));
dois.addEventListener('click',() => teclando(dois));
tres.addEventListener('click',() => teclando(tres));
quatro.addEventListener('click',() => teclando(quatro));
cinco.addEventListener('click',() => teclando(cinco));
seis.addEventListener('click',() => teclando(seis));
sete.addEventListener('click',() => teclando(sete));
oito.addEventListener('click',() => teclando(oito));
nove.addEventListener('click',() => teclando(nove));

function tratar(expressao) {
    if (expressao.includes("(")) {
        if (!expressao.includes(")")) {
            visor.innerHTML = "erro na expressão";
            throw "erro na expressão matemática, volte para a escola";
        }
        let indice = expressao.indexOf("(");
        let partes = [expressao.slice(0, indice), expressao.slice(indice)];
        let antesDoParenteseEsquerdo = partes[0];
        const depoisDoParenteseEsquerdo = partes[1].slice(1);
        indice = depoisDoParenteseEsquerdo.indexOf(")");
        const partesDentroDosParenteses = [depoisDoParenteseEsquerdo.slice(0, indice), depoisDoParenteseEsquerdo.slice(indice)];
        const dentro = partesDentroDosParenteses[0];
        const fora = partesDentroDosParenteses[1].slice(1);
        const numeroAntesDosParenteses = antesDoParenteseEsquerdo.match(/\d+$/)[0];
        let resolucaoDoParentese = Number(eval(dentro)) * Number(numeroAntesDosParenteses);
        antesDoParenteseEsquerdo = antesDoParenteseEsquerdo.replace(new RegExp(numeroAntesDosParenteses + "$"), "");
        expressao = antesDoParenteseEsquerdo + resolucaoDoParentese + fora;
        return expressao;
    }

    if (expressao.includes("²")) {
        let indice = expressao.indexOf("²");
        partes = [expressao.slice(0, indice), expressao.slice(indice)];
        let antesDoQuadrado = partes[0];
        const depoisDoQuadrado = partes[1].slice(1);
        const numeroAntesDoQuadrado = antesDoQuadrado.match(/\d+$/)[0];
        let resolucaoDoQuadrado = Number(numeroAntesDoQuadrado) * Number(numeroAntesDoQuadrado);
        antesDoQuadrado = antesDoQuadrado.replace(new RegExp(numeroAntesDoQuadrado + "$"), "");
        expressao = antesDoQuadrado + resolucaoDoQuadrado + depoisDoQuadrado;
        return expressao;
    }

    if (expressao.includes("√")) {
        let indice = expressao.indexOf("√");
        partes = [expressao.slice(0, indice), expressao.slice(indice)];
        const antesDaRaiz = partes[0];
        let depoisDaRaiz = partes[1].slice(1);
        const numeroDaRaiz = depoisDaRaiz.match(/\d+/)[0];
        let resolucaoDaraiz = Math.sqrt(Number(numeroDaRaiz));
        depoisDaRaiz = depoisDaRaiz.replace(new RegExp(numeroDaRaiz), "");
        expressao = antesDaRaiz + resolucaoDaraiz + depoisDaRaiz;
        return expressao;
    }

    if (expressao.includes("%")) {
        let indice = expressao.indexOf("%");
        partes = [expressao.slice(0, indice), expressao.slice(indice)];
        let antesDaPercentagem = partes[0];
        let depoisDaPercentagem = partes[1].slice(1);
        let numeroDaPercentagem = antesDaPercentagem.match(/\d+$/)[0];
        let resolucaoDaPercentagem = Number(numeroDaPercentagem) / 100;
        antesDaPercentagem = antesDaPercentagem.replace(new RegExp(numeroDaPercentagem + "$"), "");
        expressao = antesDaPercentagem + resolucaoDaPercentagem + depoisDaPercentagem;
        return expressao;
    }
}

function evaluate(expressao) {
    while (expressao.includes("(") | expressao.includes(")") | expressao.includes("√") | expressao.includes("²") | expressao.includes("%")) {
        expressao = tratar(expressao);
    }
    const resultado = eval(expressao);
    visor.innerHTML = resultado;
}

function teclando(tecla) {
    switch(tecla.id) {
        case "c":
            visor.innerHTML = "0";
            break;
        case "(":
            if(visor.innerHTML == "0") {
                visor.innerHTML = "";
            }
            visor.innerHTML += "(";
            break;
        case ")":
            if (visor.innerHTML == "0") {
                visor.innerHTML = "";
            }
            visor.innerHTML += ")";
            break;
        case "divisao":
            if (visor.innerHTML == "0") {
                visor.innerHTML = "";
            }
            visor.innerHTML += "/";
            break;
        case "raiz":
            if (visor.innerHTML == "0") {
                visor.innerHTML = "";
            }
            visor.innerHTML += "√";
            break;
        case "multiplicacao":
            if (visor.innerHTML == "0") {
                visor.innerHTML = "";
            }
            visor.innerHTML += "*";
            break;
        case "quadrado":
            if (visor.innerHTML == "0") {
                visor.innerHTML = "";
            }
            visor.innerHTML += "²";
            break;
        case "-":
            if (visor.innerHTML == "0") {
                visor.innerHTML = "";
            }
            visor.innerHTML += "-";
            break;
        case "=":
            if (visor.innerHTML == "0") {
                visor.innerHTML = "";
            }
            evaluate(visor.innerHTML);
            break;
        case ",":
            if (visor.innerHTML == "0") {
                visor.innerHTML = "";
            }
            visor.innerHTML += ".";
            break;
        case "%":
            if (visor.innerHTML == "0") {
                visor.innerHTML = "";
            }
            visor.innerHTML += "%";
            break;
        case "+":
            if (visor.innerHTML == "0") {
                visor.innerHTML = "";
            }
            visor.innerHTML += "+";
            break;
        case "0":
            if (visor.innerHTML == "0") {
                visor.innerHTML = "";
            }
            visor.innerHTML += "0";
            break;
        case "1":
            if (visor.innerHTML == "0") {
                visor.innerHTML = "";
            }
            visor.innerHTML += "1";
            break;
        case "2":
            if (visor.innerHTML == "0") {
                visor.innerHTML = "";
            }
            visor.innerHTML += "2";
            break;
        case "3":
            if (visor.innerHTML == "0") {
                visor.innerHTML = "";
            }
            visor.innerHTML += "3";
            break;
        case "4":
            if (visor.innerHTML == "0") {
                visor.innerHTML = "";
            }
            visor.innerHTML += "4";
            break;
        case "5":
            if (visor.innerHTML == "0") {
                visor.innerHTML = "";
            }
            visor.innerHTML += "5";
            break;
        case "6":
            if (visor.innerHTML == "0") {
                visor.innerHTML = "";
            }
            visor.innerHTML += "6";
            break;
        case "7":
            if (visor.innerHTML == "0") {
                visor.innerHTML = "";
            }
            visor.innerHTML += "7";
            break;
        case "8":
            if (visor.innerHTML == "0") {
                visor.innerHTML = "";
            }
            visor.innerHTML += "8";
            break;
        case "9":
            if (visor.innerHTML == "0") {
                visor.innerHTML = "";
            }
            visor.innerHTML += "9";
            break;
    }
}