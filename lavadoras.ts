interface Lavadora {
  id: number;
  disponible: boolean;
}

interface Alquiler {
  lavadoraId: number;
  horas: number;
  total: number;
}

class Lavanderia {
  lavadoras: Lavadora[] = [
    { id: 1, disponible: true },
    { id: 2, disponible: true }
  ];

  alquileres: Alquiler[] = [];

  calcularPrecio(horas: number): number {
    let descuento = 0;

    if (horas >= 9) descuento = 0.30;
    else if (horas >= 5) descuento = 0.20;
    else if (horas >= 3) descuento = 0.10;

    return horas * 2 * (1 - descuento);
  }

  alquilar(horas: number) {
    const lavadora = this.lavadoras.find(l => l.disponible);

    if (!lavadora) {
      console.log("No hay disponibles");
      return;
    }

    lavadora.disponible = false;

    const total = this.calcularPrecio(horas);

    this.alquileres.push({
      lavadoraId: lavadora.id,
      horas,
      total
    });
  }

  devolver(id: number) {
    const lavadora = this.lavadoras.find(l => l.id === id);
    if (lavadora) lavadora.disponible = true;
  }
}