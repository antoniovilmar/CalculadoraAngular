app.controller("CalculadoraController", function($scope) {
    $scope.mensagem = "Calculadora";
    $scope.valor = 0;

    var valorTotal = 0;

    function isValid(valor) {
        return valor && angular.isDefined(valor);
    }

    $scope.incrementar = function() {
        valorTotal += 1;
    }

    $scope.somar = function(valorParaSomar) {
        if (isValid(valorParaSomar))
            valorTotal += valorParaSomar;
    }

    $scope.diminuir = function(valorParaDiminuir) {
        if (isValid(valorParaDiminuir))
            valorTotal -= valorParaDiminuir;
    }

    $scope.multiplicar = function(valorParaMultiplicar) {
        if (isValid(valorParaMultiplicar))
            valorTotal *= valorParaMultiplicar;
    }
    $scope.dividir = function(valorParaDividir) {
        if (isValid(valorParaDividir))
            valorTotal /= valorParaDividir;
    }

    $scope.getValorTotal = function() {
        return valorTotal;
    }

});