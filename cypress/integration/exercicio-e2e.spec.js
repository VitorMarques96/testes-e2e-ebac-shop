/// <reference types="cypress" />

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/')
    });



    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {

        cy.get('.product-block').first().click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('#primary-menu > .menu-item-629 > a').click()

        cy.get('.product-block').first().click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.logo-in-theme > .logo > a > .logo-img').click()

        cy.get('.product-block').eq(7).click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.logo-in-theme > .logo > a > .logo-img').click()

        cy.get('.product-block').eq(6).click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Black').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').click()
        cy.get('.checkout-button').click()

        cy.get('#billing_first_name').type('José')
        cy.get('#billing_last_name').type('Silva')
        cy.get('#billing_company').type('EBAC')
        cy.get('#select2-billing_country-container').click().type('Brasil').get('[aria-selected="true"]').click()
        cy.get('#billing_address_1').type('Rua 10 Qd 25')
        cy.get('#billing_address_2').type('Número 11')
        cy.get('#billing_city').type('Goiânia')
        cy.get('#select2-billing_state-container').click().type('Goiás{enter}')
        cy.get('#billing_postcode').type('23638-349')
        cy.get('#billing_phone').type('11956238643')
        cy.get('#billing_email').type('emailteste@email.com')
        cy.get('#terms').click()
        cy.get('#place_order').click()

        cy.get('.page-title').should('contain', 'PEDIDO RECEBIDO')
    });


})
