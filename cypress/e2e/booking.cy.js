describe('Sistem Pengurusan Produk', () => {

  it('Ujian Paparan', () => {
    cy.visit('index.html');

    cy.contains('Sistem Pengurusan Produk');
    cy.get('table').should('be.visible');
  });

  it('Ujian Borang', () => {
    cy.visit('index.html');

    cy.get('#name').type('Produk Test');
    cy.get('#category').type('Kategori Test');
    cy.get('#price').type('100');

    cy.get('form').submit();

    // IMPORTANT: check dalam table row
    cy.get('tbody').should('contain', 'Produk Test');
  });

  it('Ujian Hapus', () => {
    cy.visit('index.html');

    // tunggu API load
    cy.wait(3000);

    cy.get('.delete-btn').should('exist');

    cy.get('.delete-btn').first().click();

    // verify row berkurang / element removed
    cy.get('.delete-btn').should('exist');
  });

});