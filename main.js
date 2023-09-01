$(document).ready(function() {
    $('.carousel').slick({
        autoplay: true,
    })

    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00.000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            cpf: {
                required: true
            },
            numero: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor preencha o seu nome.',
            email: 'Por favor, insira o seu melhor e-mail.',
            telefone: 'Por favor, informe o seu telefone celular.',
            cpf: 'Por favor, informe o seu CPF.',
            numero: 'Por favor, informe o número da sua casa.',
            cep: 'Por favor, informe o seu CEP.',
        },

        submitHandler: function(form) {
            $('#nome').val('')
            $('#email').val('')
            $('#telefone').val('')
            $('#cpf').val('')
            $('#ruaAv').val('')
            $('#numero').val('')
            $('#bairro').val('')
            $('#cidade').val('')
            $('#cep').val('')
        },
        invalidHandler: function(evento, validador) {
            let camposVazios = validador.numberOfInvalids();
            if (camposVazios) {
                alert(`Existem ${camposVazios} campo(s) vazio(s). Preencha-o(s) e tente novamente, por favor.`)
            }
        }
    })
})