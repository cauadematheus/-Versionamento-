//Variáveis de caracteres
const letrasMaiusculas = "abcdefghijklmnopqrstuvwxyz";
const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const simbolos = "!@#$%^&*()-_=+[]{};:,.<>?/|";

//Função principal de geração da senha
function gerarSenha() {
    const tamanho = parseInt(document.getElementById("tamanho").value);
    const incluirMaiusculas = document.getElementById("maiusculas").checked;
    const incluirMinusculas = document.getElementById("minusculas").checked;
    const incluirNumeros = document.getElementById("numeros").checked;
    const incluirSimbolos = document.getElementById("simbolos").checked;

    let conjuntos = [];
    let senha = "";

    //Adiciona os conjuntos que forem marcados
    if (incluirMaiusculas) conjuntos.push(letrasMaiusculas);
    if (incluirMinusculas) conjuntos.push(letrasMinusculas);
    if (incluirNumeros) conjuntos.push(numeros);
    if (incluirSimbolos) conjuntos.push(simbolos);

    //Caso nenhuma opção for marcada
    if (conjuntos.length === 0) {
        document.getElementById("senha").textContent = "Selecione pelo menos uma opção!";
        return;
    }

    //Garante que tenha pelo menos um caractere de cada tipo selecionado
    conjuntos.forEach(conjunto => {
        senha += conjunto.charAt(Math.floor(Math.random() * conjunto.length));
    });

    //Preenche o restante aleatoriamente
    while (senha.length < tamanho) {
        const conjuntoAleatorio = conjuntos[Math.floor(Math.random() * conjuntos.length)];
        senha += conjuntoAleatorio.charAt(Math.floor(Math.random() * conjuntoAleatorio.length));
    }

    //Embaralha a senha
    senha = senha.split('').sort(() => Math.random() - 0.5).join('');

    //Exibe na tela
    document.getElementById("senha").textContent = senha;
}

//Função do botão
document.getElementById("gerar").addEventListener("click", gerarSenha);