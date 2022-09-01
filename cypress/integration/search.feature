
@Regresion
Feature: Google search
 
 I want to get a result from a google search
  @search
  Scenario: Google search
    Given a browser on the google search page
    When entering the phrase "jose Arneison Asprilla arboleda - Repositorio"
    Then the related results are displayed

  @error_search
  Scenario: Google search error
    Given a browser on the Google search page
    When entering a phrasing noncoherent word
    Then an error result is displayed