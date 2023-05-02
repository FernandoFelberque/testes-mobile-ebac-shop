const homeScreen = require("../screens/home.screen")
const loginScreen = require("../screens/login.screen")
const myStoreScreen = require("../screens/myStore.screen")
const products = require("../screens/products.screen")

let urlLoja = 'http://lojaebac.ebaconline.art.br/'
let usuario = 'gerente'
let senha = 'GD*peToHNJ1#c$sgk08EaYJQ'
let NewProductName = 'Camisa polo XV2'

describe('Accessar Admin Panel e Cadastrar Produto novo', () => {
    it('Cadastrar Produto', async () => {

        //Logar
        await homeScreen.goToLogin()
        await loginScreen.setStoreAddress(urlLoja)
        await loginScreen.continue()
        await loginScreen.continueWithStoreCredentials()
        await loginScreen.login(usuario, senha)
        await loginScreen.goToTwoFactorAuth()
        await loginScreen.twoFactorLogin(senha)

        expect(await myStoreScreen.myStoreLogoIsDisplayed()).toBeTruthy()
        expect(await myStoreScreen.getStoreName()).toEqual('EBAC - Shop')
       
        // Criar novo produto
        await myStoreScreen.Gotoproducts()
        await products.NewProduct()
        await products.productType()
        await products.setProductName(NewProductName)
        await products.publicarProduto()
        expect(await products.ValidarProduto()).toEqual('Produto publicado')

    });
})