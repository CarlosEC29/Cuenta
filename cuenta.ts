import { Persona } from './persona';

// Defino la clase Cuenta
export class Cuenta {
  private titular: Persona;
  private saldo: number = 0;

  public constructor(titular: Persona, saldo: number) {
    this.titular = titular;
    if (saldo == 0) {
      this.saldo = saldo;
    }
  }

  // Getter para el saldo
  public getSaldo(): number {
    return this.saldo;
  }

  // Método para mostrar los datos de la cuenta
  public mostrar(): void {
    console.log(`Titular: ${this.titular.apellido}, ${this.titular.nombre}`);
    console.log(`Saldo: ${this.saldo}`);
  }

  // Método para ingresar dinero en la cuenta
  ingresar(monto: number): void {
    if (monto > 0) {
      this.saldo = this.saldo + monto;
      console.log(`Se ingresaron ${monto} a la cuenta.`);
    } else {
      console.log("El monto a ingresar debe ser mayor que cero.");
    }
  }

  // Método para retirar dinero de la cuenta
  retirar(monto: number): void {
    if (monto > 0) {
      this.saldo = this.saldo - monto;
      console.log(`Se retiraron ${monto} de la cuenta.`);
    } else {
      console.log("El monto a retirar debe ser mayor que cero.");
    }
  }
}