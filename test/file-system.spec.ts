import { Archivo, Directorio } from '../src/domain/file-system';

describe('FileSystem', () => {
  describe('Un archivo', () => {
    it('define su propio tamaño', () => {
      const archivo = new Archivo(7.25);
      expect(archivo.tamanio()).toBe(7.25);
    });

    it('es grande si pesa bastantes megabytes', () => {
      const archivoGrande = new Archivo(5.01);
      expect(archivoGrande.esGrande()).toBeTruthy();
    });

    it('no es grande si no pesa lo suficiente', () => {
      const archivoChico = new Archivo(5.0);
      expect(archivoChico.esGrande()).toBeFalsy();
    });
  });

  describe('Un directorio', () => {
    it('tiene como tamaño la suma de tamaño de sus elementos', () => {
      // Arrange
      const directorio = new Directorio();

      // Act
      directorio.agregarElemento(new Archivo(4.5));
      directorio.agregarElemento(
        new Directorio([new Archivo(1.0), new Archivo(2.2)]),
      );
      directorio.agregarElemento(new Archivo(3.8));

      // Assert
      expect(directorio.tamanio()).toBe(11.5);
    });

    it('es grande si tiene bastantes elementos', () => {
      const directorioGrande = new Directorio([
        new Archivo(1.0),
        new Archivo(1.0),
        new Archivo(1.0),
      ]);

      expect(directorioGrande.esGrande()).toBeTruthy();
    });

    it('es grande si su tamaño es grande', () => {
      const directorioGrande = new Directorio([new Archivo(12.0)]);

      expect(directorioGrande.esGrande()).toBeTruthy();
    });

    it('no es grande si no tiene bastantes elementos ni tiene un gran tamaño', () => {
      const directorioChico = new Directorio([
        new Archivo(4.0),
        new Archivo(6.0),
      ]);

      expect(directorioChico.esGrande()).toBeFalsy();
    });
  });
});
