"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var persona_1 = require("./persona");
var cuenta_1 = require("./cuenta");
// Ejecución del programa.
var titular = new persona_1.Persona("Cuevas", "Carlos Emmanuel");
var cuenta = new cuenta_1.Cuenta(titular, 1000000);
// Muestra los datos iniciales de la cuenta
cuenta.mostrar();
// Ingresa 500 a la cuenta
cuenta.ingresar(452645);
// Retira 200 de la cuenta
cuenta.retirar(200000);
// Muestra los datos actualizados de la cuenta
cuenta.mostrar();
