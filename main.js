$(document).ready(function(){
    $('#ver-tarefas').click(function() {
        $('#lista-tarefas').slideDown();
    })

    $('#fechar-lista').click(function() {
        $('#lista-tarefas').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const novaTarefa = $('#nova-tarefa').val();
        const novoItem = $('<li class="aFazer"></li>');
        $(`<p>${novaTarefa}</p>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#lista-tarefas').slideDown();
        $('#nova-tarefa').val('');
        
        $(novoItem).click(function(){
            $(this).toggleClass('finalizada');
        })
    })
})
