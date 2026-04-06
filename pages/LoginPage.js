class LoginPage {

    //SELECTORES
  get successMessage() {
    return $('p');
  }

    //ACCIONES

    //INSERTAMOS LOS DATOS DE USERNAME Y PASSWORD DENTRO DE LA URL
  async abrirConBasicAuth(username, password) {
    const loginUrl = browser.options.env.LOGIN_URL;

    //INSERTAMOS CREDENCIALES EN LA URL
    const urlConCredenciales = loginUrl.replace(
      'https://',
      `https://${username}:${password}@`
    );
    // NAVEGAMOS
    await browser.url(urlConCredenciales);


  }
}
export default new LoginPage();