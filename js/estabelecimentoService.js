// LISTAR ESTABELECIMENTOS
$(document).ready(function(){
    $(".novoProduto").click(function(){
        $.get("https://projeto-aeso.herokuapp.com/api/estabelecimentos", function(result){           
            if($('#estabelecimento option').length < 2){
                var options = $('#estabelecimento').html();
                $.each(result, function(i, field){
                    options = options + '<option value='+field._id+'>'+field.nomeEstabelecimento+'</option>';             
                });
                $('#estabelecimento').html(options);
            }
        });
    });
});