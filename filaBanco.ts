interface Cliente {
  turno: number;
  estado: "esperando" | "atendido";
  llegada: number;
  atencion?: number;
}

class Banco {
  cola: Cliente[] = [];
  turnoActual = 1;

  llegar() {
    this.cola.push({
      turno: this.turnoActual++,
      estado: "esperando",
      llegada: Date.now()
    });
  }

  atender() {
    const cliente = this.cola.find(c => c.estado === "esperando");

    if (!cliente) return;

    cliente.estado = "atendido";
    cliente.atencion = Date.now();
  }

  promedioEspera() {
    const atendidos = this.cola.filter(c => c.estado === "atendido");

    const total = atendidos.reduce((acc, c) =>
      acc + (c.atencion! - c.llegada), 0
    );

    return total / atendidos.length;
  }
}