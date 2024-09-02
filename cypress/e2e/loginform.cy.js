describe('Проверка авторизации', function () {

     it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio//'); // открыть сайт
        cy.get('#mail').type('german@dolnikov.ru'); //выбрать инпут логин и ввести верный логин
        cy.get('#pass').type('iLoveqastudio1'); //выбрать инпут пароль и ввести верный пароль
        cy.get('#loginButton').click(); //выбрать кнопку войти и нажать на нее
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверить успешность авторизации
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //видно крестик выхода
        })

     it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio//'); // открыть сайт
        cy.get('#forgotEmailButton').click(); //выбрать кнопку «Забыли пароль» и нажать на нее
        cy.get('#mailForgot').type('german@dolnikov.ru'); //Ввести любой имейл
        cy.get('#restoreEmailButton').click();//Нажать на кнопку "Отправить код"
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //проверить нужное сообщения
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //видно крестик выхода
        })

      it('Верный логин и НЕверный пароль', function () {
        cy.visit('https://login.qa.studio//'); // открыть сайт
        cy.get('#mail').type('german@dolnikov.ru'); //выбрать инпут логин и ввести верный логин
        cy.get('#pass').type('iLoveqastudio9'); //выбрать инпут пароль и ввести НЕверный пароль
        cy.get('#loginButton').click(); //выбрать кнопку войти и нажать на нее
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверить нужный текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //видно крестик выхода
        })

      it('НЕверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio//'); // открыть сайт
        cy.get('#mail').type('german@dolnikovvvv.ru'); //выбрать инпут логин и ввести НЕверный логин
        cy.get('#pass').type('iLoveqastudio1'); //выбрать инпут пароль и ввести верный пароль
        cy.get('#loginButton').click(); //выбрать кнопку войти и нажать на нее
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверить нужный текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //видно крестик выхода
        })

      it('Негативный кейс валидации', function () {
        cy.visit('https://login.qa.studio//'); // открыть сайт
        cy.get('#mail').type('germandolnikov.ru'); //выбрать инпут логин и ввести логин без @
        cy.get('#pass').type('iLoveqastudio1'); //выбрать инпут пароль и ввести верный пароль
        cy.get('#loginButton').click(); //выбрать кнопку войти и нажать на нее
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //получаем текст с ошибкой
        })

      it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio//'); // открыть сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); //выбрать инпут логин и ввести верный логин с разным регистром
        cy.get('#pass').type('iLoveqastudio1'); //выбрать инпут пароль и ввести верный пароль
        cy.get('#loginButton').click(); //выбрать кнопку войти и нажать на нее
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверить успешность авторизации
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //видно крестик выхода
        }) 
})