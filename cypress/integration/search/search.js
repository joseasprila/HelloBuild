import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { pagesSearch } from '../../pages/pagesSearch'
const lg = new pagesSearch()

Given('a browser on the google search page', () => {
  lg.ingresarURL()
})

When('entering the phrase "jose Arneison Asprilla arboleda - Repositorio"', () => {
  lg.search()
})
Then('the related results are displayed', () => {
  lg.result()
})


///////////

Given('a browser on the Google search page', () => {
  lg.ingresarURL()
})
When('entering a phrasing noncoherent word', () => {
  lg.searchError()
})
Then('an error result is displayed', () => {
  lg.resultError()
})