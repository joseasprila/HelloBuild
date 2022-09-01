import {
searchError
} from '../data/dataLogin'
export class pagesSearchError {
  ingresarURL() {
    cy.visit('https://www.google.com')
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
