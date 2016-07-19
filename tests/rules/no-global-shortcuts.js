'use strict';

var rule = require(__dirname + '/../../lib/rules/no-global-shortcuts');
var RuleTester = require('eslint').RuleTester;

var ruleTester = new RuleTester();

// Default options (disallow all methods)
ruleTester.run('/no-global-shortcuts', rule, {
  valid: [
    'jasmine.getFixtures().set(\'<div></div>\');'
  ],
  invalid: [
    {
      code: 'setFixtures(\'<div></div>\');',
      errors: [{ message: 'Unexpected global shortcut method setFixtures' }]
    }
  ]
});

// Customized options (allow specified methods)
ruleTester.run('/no-global-shortcuts', rule, {
  valid: [
    {
      code: 'setFixtures(\'<div></div>\');',
      options: [['setFixtures']]
    }
  ],
  invalid: [
    {
      code: 'loadFixtures(\'<div></div>\');',
      errors: [{ message: 'Unexpected global shortcut method loadFixtures' }]
    }
  ]
});
