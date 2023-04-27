class products {

    get #ClickNewProduct() { return $('id:addProductButton') }
    get #chooseProductType() { return $('android.view.ViewGroup') }
    get #productName() { return $('android=new UiSelector().text("Insira o título do produto")') }
    get #publicar() { return $('id:menu_done') }
    

    async NewProduct() {
        await this.#ClickNewProduct.click()
    }

    async productType() {
        await this.#chooseProductType.click()
    }

    async setProductName(newProductName) {
        await this.#productName.setValue(newProductName)
      
    }

    async publicarProduto() {
        await this.#publicar.click()
    }


}

module.exports = new products()