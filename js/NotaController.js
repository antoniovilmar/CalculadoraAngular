app.controller("NotaController", function($scope, OperacaoService) {
    $scope.mensagem = "Notas";
    $scope.valor = 0;

    var valorTotal = 0,
        quantidadeNotas = 0,
        media = 0;;


    $scope.agregarNota = function(valorParaSomar) {
        debugger;
        if (OperacaoService.isValid(valorParaSomar)) {
            valorTotal = OperacaoService.somar(valorTotal, valorParaSomar);
            quantidadeNotas++;
        }
    }

    $scope.calcularMedia = function(notaAgregada) {
        if (OperacaoService.isValid(notaAgregada)) {
            media = OperacaoService.dividir(notaAgregada, quantidadeNotas);
            valorTotal = 0;
            quantidadeNotas = 0;
        }
    }

    $scope.getValorTotal = function() {
        return valorTotal;
    }

    $scope.getMedia = function() {
        return media;
    }

    $scope.getQuantidadeNotas = function() {
        return quantidadeNotas;
    }

});