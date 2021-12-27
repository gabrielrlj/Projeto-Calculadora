let numDig = 0;
let apertouOp = false;
let op;

$(function(){
    let input = $('#input');
    input.val(''); 
});

function adicionarNumeroNoInput(numero) {
    let input = $('#input');
    if(apertouOp){
        input.val('');
        apertouOp = false;
    }
    input.val(input.val() + numero);
}

function adicionarSeparadorDecimalNoInput(){
    let input = $('#input');
    let val = input.val();
    if (val){
        input.val(val + '.' );
    }
}

function salvarNumAnterior(){
    let input = $('#input'); 
    numDig = input.val();
}

function adicionarOperacao(operacao){
    salvarNumAnterior();
    op = operacao;
    apertouOp = true;
}

function fazerConta(){
    switch (op) {
        case '+':
            if (!$.isNumeric(numDig) || !$.isNumeric($('#input').val())){
                alert('Números inválidos!');
                limpar();
            } else{
                $('#input').val( parseFloat(numDig) + parseFloat($('#input').val()));
                apertouOp = true;
            }
            break;

        case '-':
            if (!$.isNumeric(numDig) || !$.isNumeric($('#input').val())){
                alert('Números inválidos!');
                limpar();
            } else{
                $('#input').val( parseFloat(numDig) - parseFloat($('#input').val()));
                apertouOp = true;
            }
            break;
        
        case '*':
            if (!$.isNumeric(numDig) || !$.isNumeric($('#input').val())){
                alert('Números inválidos!');
                limpar();
            } else{
                $('#input').val( parseFloat(numDig) * parseFloat($('#input').val()));
                apertouOp = true;
            }
            break;

        case '/':
            if (!$.isNumeric(numDig) || !$.isNumeric($('#input').val()) || numDig == 0 || $('#input').val() == 0){
                alert('Números inválidos!');
                limpar();
            } else{
                $('#input').val( parseFloat(numDig) / parseFloat($('#input').val()));
                apertouOp = true;
            }
            break;
                
        default:
            alert('Operação inválida!');
            break;
    }
}

function limpar(){
    let input = $('#input');
    input.val(''); 
    numDig = '';
}