exports.config = {



  runner: 'local',

  // Nos conectamos al Appium que YA tienes corriendo en la otra terminal
  hostname: '127.0.0.1',
  port: 4723,
  path: '/',

  //
  // 🔴 MUY IMPORTANTE: desactiva el autocompile para que NO intente cargar ts/tsx
  //
  autoCompileOpts: { autoCompile: false },

  //
  // Tests
  //
  specs: ['./test/**/*.spec.js'], // usa la carpeta 'test' que ya tienes
  exclude: [],

  maxInstances: 1,

  //
  // Capacidades: Chrome del emulador Android con UiAutomator2
  //
  capabilities: [
    {
      platformName: 'Android',
      'appium:deviceName': 'Android Emulator',
      'appium:automationName': 'UiAutomator2',
      'appium:browserName': 'Chrome',
    },
  ],

  logLevel: 'info',
  bail: 0,
  baseUrl: 'https://the-internet.herokuapp.com',
  waitforTimeout: 20000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 120000,
  },

  //
  // ❌ No levantamos Appium desde WDIO (ya lo tienes en otra terminal)
  //
  services: [],
};