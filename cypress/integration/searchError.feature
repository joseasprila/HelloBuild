
@Test
Feature: Google search

  @error_search
  Scenario: Google search error
    Given a browser on the Google search page
    When entering a phrasing noncoherent word
    Then an error result is displayed