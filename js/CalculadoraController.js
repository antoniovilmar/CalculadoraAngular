app.controller("CalculadoraController", function($scope, OperacaoService) {
    $scope.mensagem = "Calculadora";
    $scope.valor = 0;

    var valorTotal = 0;

    $scope.incrementar = function() {
        valorTotal += 1;
    }

    $scope.somar = function(valorParaSomar) {
        if (OperacaoService.isValid(valorParaSomar)) {
            valorTotal = OperacaoService.somar(valorTotal, valorParaSomar);
        }
    }

    $scope.diminuir = function(valorParaDiminuir) {
        if (OperacaoService.isValid(valorParaDiminuir))
            valorTotal -= valorParaDiminuir;
    }

    $scope.multiplicar = function(valorParaMultiplicar) {
        if (OperacaoService.isValid(valorParaMultiplicar))
            valorTotal *= valorParaMultiplicar;
    }
    $scope.dividir = function(valorParaDividir) {
        if (OperacaoService.isValid(valorParaDividir))
            valorTotal = OperacaoService.dividir(valorTotal, valorParaDividir);
    }

    $scope.getValorTotal = function() {
        return valorTotal;
    }

});