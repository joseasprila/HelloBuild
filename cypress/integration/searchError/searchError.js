import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

import { pagesSearchError } from '../../pages/pagesSearchError'
const lg = new pagesSearchError()


Given('a browser on the Google search page', () => {
  lg.ingresarURL()
})
When('entering a phrasing noncoherent word', () => {
  lg.searchError()
})
Then('an error result is displayed', () => {
  lg.resultError()
})