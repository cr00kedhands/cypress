import * as data from "../data/logpass.json"
import * as main_page from "../locators/main_page.json"
import * as recovery_pass_page from "../locators/recovery_pass_page.json"
import * as result_page from "../locators/result_page.json"

describe('Проверка авторизации', function () {

  beforeEach('Начало теста', function () {
    cy.visit('/'); //открыть сайт
  })

  afterEach('Конец теста', function () {
    cy.get(result_page.exit).should('be.visible'); //видно крестик выхода
  })
  
  it('Верный логин и верный пароль', function () {
    cy.get(main_page.login).type(data.login); //выбрать инпут логин и ввести верный логин
    cy.get(main_page.pass).type(data.password); //выбрать инпут пароль и ввести верный пароль
    cy.get(main_page.enter).click(); //выбрать кнопку войти и нажать на нее
    cy.get(result_page.message).contains('Авторизация прошла успешно'); //проверить успешность авторизации
  })

  it('Проверка логики восстановления пароля', function () {
    cy.get(main_page.forgot).click(); //выбрать кнопку «Забыли пароль» и нажать на нее
    cy.get(recovery_pass_page.email).type(data.login); //Ввести любой имейл
    cy.get(recovery_pass_page.button).click();//Нажать на кнопку "Отправить код"
    cy.get(result_page.message).contains('Успешно отправили пароль на e-mail'); //проверить нужное сообщения
  })

  it('Верный логин и НЕверный пароль', function () {
    cy.get(main_page.login).type(data.login); //выбрать инпут логин и ввести верный логин
    cy.get(main_page.pass).type('iLoveqastudio9'); //выбрать инпут пароль и ввести НЕверный пароль
    cy.get(main_page.enter).click(); //выбрать кнопку войти и нажать на нее
    cy.get(result_page.message).contains('Такого логина или пароля нет'); //проверить нужный текст
  })

  it('НЕверный логин и верный пароль', function () {
    cy.get(main_page.login).type('german@dolnikovvvv.ru'); //выбрать инпут логин и ввести НЕверный логин
    cy.get(main_page.pass).type(data.password); //выбрать инпут пароль и ввести верный пароль
    cy.get(main_page.enter).click(); //выбрать кнопку войти и нажать на нее
    cy.get(result_page.message).contains('Такого логина или пароля нет'); //проверить нужный текст
  })

  it('Негативный кейс валидации', function () {
    cy.get(main_page.login).type('germandolnikov.ru'); //выбрать инпут логин и ввести логин без @
    cy.get(main_page.pass).type(data.password); //выбрать инпут пароль и ввести верный пароль
    cy.get(main_page.enter).click(); //выбрать кнопку войти и нажать на нее
    cy.get(result_page.message).contains('Нужно исправить проблему валидации'); //получаем текст с ошибкой
  })

  it('Проверка на приведение к строчным буквам в логине', function () {
    cy.get(main_page.login).type('GerMan@Dolnikov.ru'); //выбрать инпут логин и ввести верный логин с разным регистром
    cy.get(main_page.pass).type(data.password); //выбрать инпут пароль и ввести верный пароль
    cy.get(main_page.enter).click(); //выбрать кнопку войти и нажать на нее
    cy.get(result_page.message).contains('Авторизация прошла успешно'); //проверить успешность авторизации
  }) 
})