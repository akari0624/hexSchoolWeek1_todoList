describe('first test', () => {
  it('can open page', () => {
    cy.visit('http://localhost:8087')
    // let the browser can apply the css and render correct UI
    cy.wait(2000)
    const firstInput = cy.get('input:first')
    firstInput.should('have.attr', 'placeholder', '＋ Add Task')
    firstInput.click()
    // edit window can open
    cy.wait(200)
    cy.get('input:nth-child(2)').should('have.attr', 'placeholder', 'Type Something Here…')

    // click the cancel button, edit window will close
    cy.get('section:first > div:nth-child(5) > a:first').click()
    // first input become `＋ Add Task` again
    cy.get('input:first')
      .should('have.attr', 'placeholder', '＋ Add Task')
    
  })
})