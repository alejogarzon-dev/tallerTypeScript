// INTERFACES
interface Transaccion {
  id: number;
  tipo: "deposito" | "retiro";
  monto: number;
  fecha: Date;
  saldoResultante: number;
}

interface Cuenta {
  titular: string;
  saldo: number;
  transacciones: Transaccion[];
}

// IMPLEMENTACIÓN
class Cajero {
  private cuenta: Cuenta;
  private contadorId: number = 1;

  constructor(titular: string, saldoInicial: number) {
    this.cuenta = {
      titular,
      saldo: saldoInicial,
      transacciones: []
    };
  }

  consultarSaldo(): number {
    return this.cuenta.saldo;
  }

  depositar(monto: number): void {
    if (monto <= 0) throw new Error("Monto inválido");

    this.cuenta.saldo += monto;

    this.registrar("deposito", monto);
  }

  retirar(monto: number): void {
    if (monto > this.cuenta.saldo) {
      console.log("Fondos insuficientes");
      return;
    }

    this.cuenta.saldo -= monto;

    this.registrar("retiro", monto);
  }

  private registrar(tipo: "deposito" | "retiro", monto: number) {
    this.cuenta.transacciones.push({
      id: this.contadorId++,
      tipo,
      monto,
      fecha: new Date(),
      saldoResultante: this.cuenta.saldo
    });
  }

  estadoCuenta() {
    const resumen = this.cuenta.transacciones.map(t =>
      `${t.tipo} - $${t.monto} -> saldo: $${t.saldoResultante}`
    );

    const totalDepositos = this.cuenta.transacciones
      .filter(t => t.tipo === "deposito")
      .reduce((acc, t) => acc + t.monto, 0);

    const totalRetiros = this.cuenta.transacciones
      .filter(t => t.tipo === "retiro")
      .reduce((acc, t) => acc + t.monto, 0);

    return { resumen, totalDepositos, totalRetiros };
  }
}