class products {

    get #ClickNewProduct() { return $('id:addProductButton') }
    get #chooseProductType() { return $('android.view.ViewGroup') }
    get #productName() { return $('android=new UiSelector().text("Insira o título do produto")') }
    get #publicar() { return $('id:menu_done') }
    get #produtovalidado() { return $('id:snackbar_text') }
  
    

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

    async ValidarProduto() {
        await this.#produtovalidado.getText()
    }


}

module.exports = new products()