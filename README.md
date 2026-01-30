# --------------------------- ARCHIVOS PROBADOS WEB ---------------------------
# ▶️ Archivo probado: /web/BuscarTest.cy.js
Pruebas reales en http://www.automationpractice.pl.
Valida la funcionalidad de búsqueda de productos.

## ✔ Validaciones incluidas: Esta prueba pasa correcta

- Buscar la palabra dress
- Hacer clic en el botón de búsqueda
- Verificar que NO aparezca “0 results”
- Validar que existan elementos listados

## ✔ Validaciones incluidas: Esta prueba debe fallar

- Validar que todos los resultados contengan “dress”
- Validar cada .product-name
- Afirmar que todos contengan la palabra

# ▶️ Archivo probado: /web/Login.cy.js
Pruebas contra el sitio de autenticación básica:
https://the-internet.herokuapp.com/basic_auth

# ✔ Validaciones incluidas: Esta prueba pasa correcta

- Usuario correcto: admin
- Contraseña correcta: admin
- Navegar a "Basic Auth"
- Validar mensaje:
- "Congratulations! You must have the proper credentials."
- Validar URL contiene /basic_auth

# ✔ Validaciones incluidas: Esta prueba debe fallar

- Usuario incorrecto
- Contraseña incorrecta
- Intentar acceder al recurso
- Validar mensaje (esperado que falle)
- Validar URL

# ▶️ Archivo probado: /web/PruebaTestDOMMVC.cy.js
Sitio probado:
https://todomvc.com/examples/react/dist/
Valida flujo de tareas (add, complete, persistencia).

# ✔ Validaciones incluidas: Prueba con exito

- Agregar y marcar tareas
- Ingresar lista de tareas
- Usar .each() para agregarlas
- Validar tareas agregadas
- Marcar tareas como:
    - activas
    - completadas
    - restantes
- Usar filtros (All / Active / Completed)
- Validar contador de tareas
- Persistencia al recargar
    - Recargar página
    - Validar que las tareas se mantengan
    - Validar estado persistente

## tecnologias usadas

- WebdriverIO
- Appium v2
- UiAutomator2
- Chrome del emulador Android
- Mocha

# Instalación y configuración de Android Studio

**Descargar Android Studio:**
- https://developer.android.com/studio

**Instalar:**

- SDK
- Platform Tools
- Build Tools
- Emulator
- System Image (Android 11 recomendado)

**Configurar variables de entorno:**    

- ANDROID_HOME=C:\Users\TU_USUARIO\AppData\Local\Android\Sdk
- PATH=%ANDROID_HOME%\platform-tools
- PATH=%ANDROID_HOME%\tools
- PATH=%ANDROID_HOME%\emulator

**verificar**
- adb devices

**Instalar Appium v2**

- npm install -g appium
- appium -v

**instalar driver**

- appium driver install uiautomator2
- appium --allow-insecure=uiautomator2:chromedriver_autodownload **Activar descarga automática de Chromedriver**

**Configuración de WebdriverIO**

- npm init -y
- npm install @wdio/cli --save-dev
- npx wdio config

**Capabilities usadas:**

- platformName: "Android",
- automationName: "UiAutomator2",
- browserName: "Chrome"

# ▶️ Ejecutar pruebas Mobile

**Iniciar Appium**
- appium --allow-insecure=uiautomator2:chromedriver_autodownload

**Verificar emulador**
- adb devices

**Ejecutar pruebas**
- npx wdio


## Estructura Mobile
TEST-MOBILE/
  test/
    buscar1tel.spec.js
    loginMobile.spec.js
    todoMobile.spec.js
  wdio.conf.js
  package.json
