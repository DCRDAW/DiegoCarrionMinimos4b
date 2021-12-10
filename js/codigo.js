'use strict'

/**
Resta dos números enteros.
Resta al Minuendo el Sustraendo.
@param {String} a Minuendo.
@param {String} b Sustraendo.
@return {Number} La resta de a menos b.
**/
function restar(a, b){
    if(isNaN(a)||isNaN(b)){
        throw 'Error al sumar'
    }else
        return +a - +b
}

/** Genera un array con los 10 primeros números enteros pares
@result {Array} Array con los 10 primeros números enteros pares.
**/
function generarArray(){
    let array =[]
    let contador=0;
    while(contador<9){
        for (let i=0; i < 30; i++) {
           if(i%2==0){
                array[contador]=i
                contador++
           } 
        }
    }
    return array
}

/** Suma los elementos de un array bidimensional numérico
@param {Array} matriz Array bidimensional numérico.
@return {Number} Suma de los elementos del array.
**/
function sumarArrayBidimensional(matriz){
    let suma=0
    matriz.forEach(elemento => {
      elemento.forEach(numero => {
          suma=(+suma)+(+numero)
      });
    });
  return suma
}

//Clase LenguajeProgramacion
class LenguajeProgramacion{
    constructor(nombre,anoPublicacion){
        this.nombre='JavaScript'
        this.anoPublicacion=1995
    }
    /**
     * 
     * @returns {String} el nombre del lenguaje
     */
    getNombre(){
        return this.nombre
    }
    /**
     * 
     * @param {String} nombre el nombre del lenguaje
     */
    setNombre(nombre){
        this.nombre= nombre
    }
    /**
     * 
     * @returns {number} el año en el que se publicó el lenguaje
     */
    getAnoPublicacion(){
        return this.anoPublicacion
    }
    /**
     * 
     * @param {number} anoPublicacion el año en el que se publicó el lenguaje
     */
    setAnoPublicacion(anoPublicacion){
        this.anoPublicacion= anoPublicacion
    }
    /**
     * 
     * @returns {number} la edad en años del lenguaje
     */
    getEdad(){
        return (+2021)-(+this.anoPublicacion)
    }
}
