import {
search
} from '../data/dataLogin'
export class pagesSearch {
  ingresarURL() {
    cy.visit('https://www.google.com')
  }

  search() {
    cy.get('.gLFyf').type(search)
    
  }

  result() {
    cy.screenshot()
    cy.get('.g > :nth-child(1) > [jscontroller="SC7lYd"] > .kvH3mc > .jGGQ5e > .yuRUbf > a > .LC20lb').contains('Desarrollo de un driver basado en APIs para hacer interfaz ...')
    cy.get('[href="https://repository.ucc.edu.co/handle/20.500.12494/34364?mode=full"] > .LC20lb').contains('Language - Repositorio Institucional UCC')
    cy.get('#dimg_1').click()
    cy.get('.BIB1wf > .Y6heUd > .nIWXKc > .OUZ5W > .QnfS4e > .kEwVtd > .aDMkBb > .eYbsle').contains('Desarrollo de un driver basado en APIs para hacer interfaz ...')
    cy.wait(300)
    cy.screenshot()
  }
  

  searchError(){
    cy.get('.gLFyf').type('Jose' + this.stringGen(30)+ '{enter}') 
  }
  stringGen(cantidadcaracteres) {
    let text = ''
    let possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (let i = 0; i < cantidadcaracteres; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length))
    return text
  }

  resultError(){
    cy.get('[aria-level="3"]').contains('No se han encontrado resultados para tu búsqueda (').click()
    cy.screenshot()
  }
}

