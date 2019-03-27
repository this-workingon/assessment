var config = {
  runner: 'local',
  specs: [
    './test/**/*.spec.ts'
  ],
  maxInstances: 1,
  logLevel: 'error',
  bail: 0,
  baseUrl: 'https://www.gmail.com',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  services: [
    'selenium-standalone'
  ],
  framework: 'mocha',
  reporters: [
    'spec', ['allure', {
      outputDir: 'allure'
    }]
  ],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
    compilers: [
      'tsconfig-paths/register'
    ]
  },

  before: function(capabilities, specs) {
    require('ts-node').register({ files: true });
  },
}

if (process.env.CI) {
  config.services = [
    'sauce'
  ];

  config.user = process.env.SAUCE_USERNAME;
  config.key = process.env.SAUCE_ACCESS_KEY;

  config.capabilities = [
    {
      maxInstances: 1,
      browserName: 'chrome',
      'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
      build: process.env.TRAVIS_BUILD_NUMBER
    },
    {
      maxInstances: 1,
      browserName: 'firefox',
      'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
      build: process.env.TRAVIS_BUILD_NUMBER
    }
  ];
}
else {
  config.capabilities = [
    {
      maxInstances: 1,
      browserName: 'chrome'
    }
  ];
}

exports.config = config;
