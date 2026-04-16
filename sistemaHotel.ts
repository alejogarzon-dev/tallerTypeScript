type TipoHabitacion = "economica" | "estandar" | "suite";

interface Reserva {
  tipo: TipoHabitacion;
  noches: number;
  precioTotal: number;
}

const precios = {
  economica: 80,
  estandar: 150,
  suite: 300
};

function calcularDescuento(noches: number): number {
  if (noches >= 11) return 0.15;
  if (noches >= 6) return 0.10;
  if (noches >= 3) return 0.05;
  return 0;
}

class Hotel {
  reservas: Reserva[] = [];

  crearReserva(tipo: TipoHabitacion, noches: number) {
    const descuento = calcularDescuento(noches);
    const precioBase = precios[tipo] * noches;
    const total = precioBase * (1 - descuento);

    this.reservas.push({
      tipo,
      noches,
      precioTotal: total
    });
  }

  reporte() {
    const ingresos = this.reservas.reduce((acc, r) => acc + r.precioTotal, 0);

    const porTipo = this.reservas.reduce((acc: any, r) => {
      acc[r.tipo] = (acc[r.tipo] || 0) + r.precioTotal;
      return acc;
    }, {});

    return { ingresos, porTipo };
  }
}