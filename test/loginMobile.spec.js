import { expect } from 'chai';

describe('Login a https://the-internet.herokuapp.com/', () => {
    it('Login válido mediante Basic Auth en Chrome Android', async () => {
        // Arrange
        const username = 'admin';
        const password = 'admin';
        // Action
        await browser.url(`https://${username}:${password}@the-internet.herokuapp.com/basic_auth`);

        // Assert 1: Texto de felicitaciones
        const successMessage = await $('p');
        const text = await successMessage.getText();
        expect(text).to.include('Congratulations!');

        // Assert 2: Validación de URL (Aquí estaba el fallo)
        const currentUrl = await browser.getUrl();
        // Usamos la sintaxis de Chai correctamente
        expect(currentUrl).to.contain('/basic_auth');
    });
});