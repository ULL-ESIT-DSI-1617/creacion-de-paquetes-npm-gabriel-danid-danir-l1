'use strict';

/**
 * Modulo npm de Shape
 * 
 * Link del repositorio
 * 
 * Autores: Daniel Díaz García, Gabriel Fernandez Castro y Daniel Rodriguez Martín
 * 
 * Team: gabriel-danid-danir-l1
 * 
 * Clase padre Shape de donde heredan el resto de formas geométricas.
 * 
 * @param {hash} options
 * @param {string} shape
 */
let util = require('util');

class Shape {
      
      /**
       * @param {hash} options Alto y Ancho
       * @param {string} shape forma geométrica
       */
  constructor(options, shape) {
    Object.assign(this, options);
    this.shape =  shape || this.constructor.name;
  }

    /**
     * @function shape.area()
     * @return {value} devuelve el área de cualquier forma geométrica
     */
  getArea() {
   try {
      let shape = this;
      if (this.constructor.name === 'Shape') 
        shape = new Shape.Shapes[this.shape](this);
      return shape.area();
   }
   catch(e) {
     console.error(`Can't compute area of '${this.shape}' shape.`);
     return null;
   }
  }
  
}
Shape.Shapes = Shape.Shapes || {};
module.exports = Shape;