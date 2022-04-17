$(document).ready(function(){

  $("#cep").mask("99.999-999");

       $("#btBuscar").click(function(){

    	   var cepvalue = $("#cep").val();
         $("#cep").val("");
        cepvalue = cepvalue.replace(/\./g, "");
        cepvalue = cepvalue.replace(/\-/g, "");
    	   debugger;
    	   $.ajax({
    		    url: 'https://viacep.com.br/ws/' + cepvalue + '/json/',
    		    type: "GET",
    		    dataType: "json",
    		    success: function (data) {
 				   // alert(data) //para exibir que chegou o JSON;

    		    	$("#logradouro").val(data.logradouro);
    		    	$("#complemento").val(data.complemento);
    		    	$("#bairro").val(data.bairro);
    		    	$("#uf").val(data.uf);
    		    	$("#cidade").val(data.localidade);


    		    },

    		});
       });
});
