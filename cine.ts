type TipoBoleta = "adulto" | "estudiante" | "niño";

const preciosBoleta = {
  adulto: 10,
  estudiante: 7,
  niño: 5
};

interface Venta {
  pelicula: string;
  cantidad: number;
  tipo: TipoBoleta;
  total: number;
}

class Cine {
  ventas: Venta[] = [];

  vender(pelicula: string, tipo: TipoBoleta, cantidad: number) {
    const precio = preciosBoleta[tipo];
    const total = precio * cantidad;

    this.ventas.push({ pelicula, tipo, cantidad, total });
  }

  ingresosTotales() {
    return this.ventas.reduce((acc, v) => acc + v.total, 0);
  }

  populares() {
    return this.ventas.filter(v => v.cantidad >= 70);
  }
}