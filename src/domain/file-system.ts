export interface Contenido {
  esGrande(): boolean;
  tamanio(): number;
}

/**
 * Archivo
 */
export class Archivo implements Contenido {
  constructor(private _tamanio: number = 0) {}

  esGrande(): boolean {
    return this._tamanio > 5;
  }

  tamanio(): number {
    return this._tamanio;
  }
}

/**
 * Directorio
 */
export class Directorio implements Contenido {
  elementos: Contenido[] = [];

  constructor(archivos: Archivo[] = []) {
    this.elementos = archivos;
  }

  agregarElemento(elemento: Contenido) {
    this.elementos.push(elemento);
  }

  esGrande(): boolean {
    return this.tamanio() > 10 || this.elementos.length > 2;
  }

  tamanio(): number {
    return this.elementos.reduce(
      (acum, elemento) => acum + elemento.tamanio(),
      0,
    );
  }
}
