/**
 * @fileoverview ESLint rules for jasmine-jquery
 * @author Natalie Chow
 */

'use strict';

var requireIndex = require('requireindex');

var rules = requireIndex(__dirname + '/rules');
var globalShortcutConfig = require(__dirname + '/global-shortcut-config');

module.exports = {
  rules: rules,
  environments: {},
  configs: {
    recommended: {
      globals: globalShortcutConfig,
      rules: {
        'jasmine-jquery/no-global-shortcuts': 0
      }
    }
  }
};
