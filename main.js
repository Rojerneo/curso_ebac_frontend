const form = document.getElementById('form-atividades');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji festejando"</>'
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado"</>'
let linhas = '';
let atividades = [];
let notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt('Digite a nota mínima: '));

form.addEventListener('submit', function(e){
    e.preventDefault();

    addAtividades();
    atualizaTabela();
    atualizaMediaFinal();
})

function addAtividades() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida.`);
    } else {
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}`
        linha += '</tr>';

        linhas += linha;
    }
    
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();
    document.querySelector('#media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.querySelector('#media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length
}