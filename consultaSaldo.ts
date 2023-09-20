import { Persona } from './persona';
import { Cuenta } from './cuenta';

// Ejecución del programa.
const titular = new Persona("Cuevas", "Carlos Emmanuel");
const cuenta = new Cuenta(titular, 1000000);

// Muestra los datos iniciales de la cuenta
cuenta.mostrar(); 

// Ingresa 500 a la cuenta
cuenta.ingresar(452645); 

// Retira 200 de la cuenta
cuenta.retirar(200000); 

// Muestra los datos actualizados de la cuenta
cuenta.mostrar(); 