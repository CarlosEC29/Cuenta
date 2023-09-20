"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cuenta = void 0;
// Defino la clase Cuenta
var Cuenta = /** @class */ (function () {
    function Cuenta(titular, saldo) {
        this.saldo = 0;
        this.titular = titular;
        if (saldo == 0) {
            this.saldo = saldo;
        }
    }
    // Getter para el saldo
    Cuenta.prototype.getSaldo = function () {
        return this.saldo;
    };
    // Método para mostrar los datos de la cuenta
    Cuenta.prototype.mostrar = function () {
        console.log("Titular: ".concat(this.titular.apellido, ", ").concat(this.titular.nombre));
        console.log("Saldo: ".concat(this.saldo));
    };
    // Método para ingresar dinero en la cuenta
    Cuenta.prototype.ingresar = function (monto) {
        if (monto > 0) {
            this.saldo = this.saldo + monto;
            console.log("Se ingresaron ".concat(monto, " a la cuenta."));
        }
        else {
            console.log("El monto a ingresar debe ser mayor que cero.");
        }
    };
    // Método para retirar dinero de la cuenta
    Cuenta.prototype.retirar = function (monto) {
        if (monto > 0) {
            this.saldo = this.saldo - monto;
            console.log("Se retiraron ".concat(monto, " de la cuenta."));
        }
        else {
            console.log("El monto a retirar debe ser mayor que cero.");
        }
    };
    return Cuenta;
}());
exports.Cuenta = Cuenta;
