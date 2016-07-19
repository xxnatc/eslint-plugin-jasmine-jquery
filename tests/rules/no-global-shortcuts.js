'use strict';

var rule = require(__dirname + '/../../lib/rules/no-global-shortcuts');
var RuleTester = require('eslint').RuleTester;

RuleTester.describe('/no-global-shortcuts', function() {
  var ruleTester = new RuleTester();

  ruleTester.run('Default options (disallow all methods)', rule, {
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

  ruleTester.run('Customized options (allow specified methods)', rule, {
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
});
