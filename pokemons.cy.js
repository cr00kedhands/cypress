describe('Проверка end-to-end Pokemons', function () {

     it('Проверка', function () {
        cy.visit('https://pokemonbattle.ru/'); //зайти на сайт
        cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');
        cy.get('#password').type('USER_PASSWORD');
        cy.get('.auth__button').click();
        cy.wait(1000);
        cy.get('.header__container > .header__id').click({ force: true }); //зайти на страницу своего тренера
        cy.get('[href="/shop"]').click({ force: true }); //зайти на страницу покупки нового аватара
        cy.get('.available > .shop__button').first().click({ force: true }); //выбрать аватар с css свойством и кнопку купить  
        cy.wait(1000);
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4444333322221111'); // ввести номер карты
        cy.get(':nth-child(1) > .pay_base-input-v2').type('10/25'); //ввести срок
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); //ввести код
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('german dolnikov'); //ввести имя
        cy.get('.pay-btn').click({ force: true }); // нажать оплатить
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.get('.payment__font-for-success').contains('Покупка прошла успешно'); 
        cy.get('.success__image').should('be.visible');
        cy.get('.payment__adv').click();


        })
})
     
   
     
     
    
     
     
     //ввести код из пуша
     // нажать отправить
     //нажать вернуться
