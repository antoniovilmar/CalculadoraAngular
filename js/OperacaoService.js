app.service("OperacaoService", function() {

    this.isValid = function(valor) {
        return (valor || Number.isInteger(valor)) && angular.isDefined(valor);
    }

    this.somar = function(valorUm, valorDois) {
        let valorSomado = 0;
        if (this.isValid(valorUm) && this.isValid(valorDois))
            valorSomado = valorUm + valorDois;

        return valorSomado;
    }

    this.dividir = function(valor, divisor) {
        let valorDividido = 0;
        if (this.isValid(valor) && this.isValid(divisor))
            valorDividido = valor / divisor;

        return valorDividido;
    }

});