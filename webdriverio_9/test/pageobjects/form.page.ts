import { ChainablePromiseElement } from 'webdriverio'
import Page from './page.js'

class FormPage extends Page {

    get username () { return $('#username') }
    get password () { return $('#password') }
    get submitButton () { return $('#login button[type=submit]') }
    get flash () { return $('#flash') }

    /**
     * define or overwrite page methods
     */
    open () {
        return super.open('login')
    }

    async submit () {
        const ele= this.submitButton
        await ele.click()
             await this.submitClick( this.submitButton)
    }

    // just created to test
    async submitClick (ele: WebdriverIO.Element | ChainablePromiseElement) {

        await ele.click()
    }
}

export default new FormPage()
