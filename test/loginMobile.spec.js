import { expect } from 'chai';    //para hacer validaciones
import LoginPage from '../pages/LoginPage.js';

describe('Login a https://the-internet.herokuapp.com/', () => {
  it('Login válido', async () => {

    // Act
    await LoginPage.abrirConBasicAuth('admin', 'admin');

    // Assert
    const text = await LoginPage.successMessage.getText();

    expect(text).to.include('Congratulations!');
  });


    //El mismo procedimiento pero tiene que ser erroneo
  it('Login inválido', async () => {

    // Act (credenciales malas)
    await LoginPage.abrirConBasicAuth('admin123', 'admin123');

    // Assert
    const pageSource = await browser.getPageSource();

    expect(pageSource).to.not.include('Congratulations!');
  });

});
