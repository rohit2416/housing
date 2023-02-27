describe('template spec', () => {
  it('passes', () => {
    cy.visit('localhost:4200/welcome');
    cy.title().should('equal','Zillow welcome');
  })

})

describe('Product Page list of products spec', () => {
  beforeEach(()=>{
    cy.visit('localhost:4200/products');
  })
  it('list of products count', () => {
    cy.get('table').find('tbody tr').should('have.length.gte', 4);
    cy.get('table').find('img').should('not.exist');
  });
  it('display the img tag in the table', () => {
    cy.get('table').contains('button', 'Show Image').click();
    cy.get('table').find('img').should('exist');
  });
  it('Product view details', () => {
    cy.get('table tbody a').first().then(($anchor)=>{
      const href = $anchor.attr('href');
      cy.wrap($anchor).click();

      cy.url().should('equal',`${location.origin}${href}`);
    }) 
   
  });

})
