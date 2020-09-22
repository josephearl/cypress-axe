function logViolations(violations) {
  if (violations.length > 0) {
    cy.task('log', `${violations.length} accessibility violation${
      violations.length === 1 ? '' : 's'
    } ${violations.length === 1 ? 'was' : 'were'} detected`)
    // Pluck specific keys to keep the table readable
    const violationData = violations.map(
      ({ id, impact, description, nodes }) => ({
        id,
        impact,
        description,
        nodes: nodes.length
      })
    )
    cy.task('table', violationData)
  }
}

describe('Simple', () => {
    it('finds accessibility issues', () => {
        cy.visit('/simple.html')
        cy.injectAxe()
        cy.checkA11y(undefined, undefined, (violations) => {
            assert.equal(violations.length, 5, 'Expected 5 violations to be found')
            logViolations(violations)
        }, true)
    })
})
