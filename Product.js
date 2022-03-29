/**
 * Product Class
 */
export class Product {
  /**
   *
   * @param {string} name 
   * @param {number} formulacion 
   * @param {number} dosis 
   * @param {number} capacidadDelTanque
   * @param {number} tasaDeAplicacion
   * @param {number} superficieATratar
   * @param {number} autonomia
   * @param {number} cantidadRecargas
   * @param {number} cantidadProductoPorCarga
   */
  constructor(name, formulacion, dosis, capacidadDelTanque, tasaDeAplicacion, superficieAtratar, autonomia, cantidadRecargas, cantidadProductoPorCarga) {
    this.name = name;
    this.formulacion = formulacion;
    this.dosis = dosis;
    this.capacidadDelTanque = capacidadDelTanque;
    this.tasaDeAplicacion = tasaDeAplicacion;
    this.superficieATratar = superficieAtratar;
    this.autonomia = capacidadDelTanque/tasaDeAplicacion;
    this.cantidadRecargas = superficieAtratar/(capacidadDelTanque/tasaDeAplicacion);
    this.cantidadProductoPorCarga = dosis*(capacidadDelTanque/tasaDeAplicacion);


  }
}
