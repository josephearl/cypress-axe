describe('Simple', () => {
    it('finds accessibility issues', () => {
        cy.visit('/simple.html')
        cy.injectAxe()
        cy.checkA11y(undefined, undefined, (violations) => {
            assert.equal(violations.length, 5, 'Expected 5 violations to be found')
        }, true)
    })
})
