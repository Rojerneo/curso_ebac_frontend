const form = document.getElementById('form-numeros');
let primeiroNumero = document.getElementById('primeiroNumero');
let segundoNumero = document.getElementById('segundoNumero');
let numerosValidados = false;

function validaN1N2(validaNumeros) {
    let numerosValidados = primeiroNumero.value < segundoNumero.value
    return numerosValidados
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const mensagemErro = document.querySelector('.message-error');
    const mensagemSucesso = document.querySelector('.success');
    const primeiroNumero = document.querySelector('#primeiroNumero');
    numerosValidados = validaN1N2();

    if (numerosValidados) {
        mensagemSucesso.style.display = 'block';
        primeiroNumero.value = '';
        segundoNumero.value = '';
        mensagemErro.style.display = ''; //Para que o usuário não precise recarragar a página para que a mensagem de erro seja apagada
        primeiroNumero.classList.remove('error'); //Para que o usuário não precise recarragar a página para que a mensagem de erro seja apagada
    } else {
        mensagemSucesso.style.display = 'none'; //Para que mensagem de sucesso seja ocultada se a nova inserção de números for inválida. Fiz assim pois pensei na possibilidade do usuário ter vários números para digitar e enviar sem precisar recarregar a página. As mensagens de erro e sucesso vão se atualizado a cada conjunto de números digitados e submetidos.
        mensagemErro.style.display = 'block';
        primeiroNumero.classList.add('error');
    }
})