/**
 *   Este fichero prueba el código.
 *   @author Miguel Jaque <mjaque@migueljaque.com>
 *   @license GPL-3.0-or-later
 *   Ref: https://spdx.org/licenses/
 */

/*** NO MODIFIQUES ESTE FICHERO ***/
/* Tú debes programar solo en codigo.js */

'use strict'

var registro = null
function registrar(valor) {
  registro = valor
}

class Tester{
  constructor(){
    window.addEventListener('load', this.iniciar.bind(this))
    this.tests = []
  }
  iniciar(){
    let divs = document.querySelectorAll('div[data-test]')
    for(const divTest of divs)
      this.tests.push(new Test(divTest))
  }
}

class Test{
  constructor(divTest){
    this.superado = null  //Booleano
    this.div = divTest
    this.metodo = window[this.div.getAttribute('data-test')]
    this.div.classList.add('test')
    this.button = document.createElement('button')
    this.div.appendChild(this.button)
    this.button.appendChild(document.createTextNode('Probar'))
    this.span = document.createElement('span')
    this.div.appendChild(this.span)
    this.span.appendChild(document.createTextNode('Sin resultado... todavía'))
    this.button.onclick = this.test.bind(this)
  }
  test(){
    this.superado = null
    this.metodo.call(this)
    if (this.superado !== false)
     this.superar()
  }
  superar(){
    this.span.innerHTML = 'Test OK'
    this.div.classList.remove('nok')
    this.div.classList.add('ok')
    this.button.innerHTML = 'Probar'
  }
  comprobar(valorReal, valorEsperado, mensaje){
    if (valorReal !== valorEsperado){
      console.error(`Se esperaba el resultado ${valorEsperado}, pero se ha obtenido ${valorReal}`)
      this.fallar(mensaje)
    }
  }
  fallar(mensaje){
    console.error(mensaje)
    this.superado = false
    this.div.classList.remove('ok')
    this.div.classList.add('nok')
    this.button.innerHTML = 'Volver a Probar'
    this.span.innerHTML = 'Test KO'
  }
}
new Tester()

function test1(){
  this.comprobar(restar(5,2), 3, 'Falla la función restar.')
  this.comprobar(restar(15,2), 13, 'Falla la función restar.')
}

function test2(){
  try{
    restar('a',2)
    this.fallar('No se genera la excepción.')
  }catch (ex){

  }
}

function test3(){
  let array = generarArray()
  if (!array)
    this.fallar('No se ha generado el array.')
  else
    for (let i = 0; i < 10; i++)
      if (array[i] != 2*i)
        this.comprobar(array[i], 2*i, 'El array no es correcto')
}

function test4(){
  let array1 = [[],[],[]]
  array1[0] = [1,2,3]
  array1[1] = [4,5,6]
  array1[2] = [7,8,9]
  this.comprobar(sumarArrayBidimensional(array1), 45, 'La suma no es correcta.')
  let array2 = [[],[]]
  array2[0] = [1,2,3]
  array2[1] = [4,5,6]
  this.comprobar(sumarArrayBidimensional(array2), 21, 'La suma no es correcta.')
}

function test5(){
  try{
    let obj = new LenguajeProgramacion()
    this.comprobar(obj.nombre, 'JavaScript', 'Falla el nombre por defecto.')
    this.comprobar(obj.anoPublicacion, 1995, 'Falla el año de publicación por defecto.')
    obj.setNombre('TypeScript')
    this.comprobar(obj.getNombre(), 'TypeScript', 'Falla la gestión del nombre.')
    obj.setAnoPublicacion(2005)
    this.comprobar(obj.getAnoPublicacion(), 2005, 'Falla la gestión del año de publicación.')
    this.comprobar(obj.getEdad(), 16, 'Falla el cálculo de edad.')
  }
  catch(ex){
    this.fallar('Se ha generado una excepción inesperada.')
    console.log(ex)
  }
}
