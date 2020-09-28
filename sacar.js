function sacar(valor, notas){
    $("#saidas").empty();
    if(!Number.isInteger(valor / 10)){
        $('#saidas').append('<li>O saque deve ser múltiplo de 10</li> ')
    } else {
        for(i=0; i <= notas.length+2 ; i++){
    
            Array.max = function(array) {
                return Math.max.apply(Math, array)
            };
        
            var maiorNota = Array.max(notas)
            var div = valor / maiorNota
        
            if(div >= 1){
                var plural = parseInt(div) > 1 ? "notas" : "nota"
                $('#saidas').append("<li>" + parseInt(div) + " " + plural + " R$ " + maiorNota + ",00</li>")
                var total = (parseInt(div) * maiorNota)
                if(valor == total) {
                    valor = 0
                } else {
                    valor = valor - total
                }
            }
        
            notas = notas.filter(item => item !== maiorNota)
        }
    }
}

function remove(){
    var val = $("#valor")[0].value
    var newVal = val.slice(0,-1);
    $("#valor")[0].value = newVal
    
}

function insert(valor){
    var elem = $("#valor")
    elem.val( elem.val() + valor )
}

function cancel(){
    $("#valor").val("")
}



