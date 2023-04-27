class MyStoreScreen {
    get #myStoreLogo(){
        return $('~My store')
    }

    get #myStoreName(){
        return $('id:toolbar_subtitle')
    }

    get #ClickProducts() { return $('id:products') }

    async getStoreName(){
        return await this.#myStoreName.getText()
    }

    async myStoreLogoIsDisplayed(){
        await this.#myStoreLogo.waitForExist()
        return await this.#myStoreLogo.isDisplayed()
    }

    async Gotoproducts(){
        await this.#ClickProducts.click() 
    }
}

module.exports = new MyStoreScreen()