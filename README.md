# eslint-plugin-jasmine-jquery
[![Travis](https://img.shields.io/travis/xxnatc/eslint-plugin-jasmine-jquery.svg?style=flat-square)](https://github.com/xxnatc/eslint-plugin-jasmine-jquery)

ESLint rules for [jasmine-jquery](https://github.com/velesin/jasmine-jquery)

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm install eslint --save-dev
```

Next, install `eslint-plugin-jasmine-jquery`:

```
$ npm install eslint-plugin-jasmine-jquery --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-jasmine-jquery` globally.

## Usage

Add `jasmine-jquery` to the plugins section of your `.eslintrc` configuration file, as well as including `jasmine` and `jquery` environments:

```json
{
  "plugins": [
    "jasmine-jquery"
  ],
  "env": {
    "jquery": true,
    "jasmine": true
  }
}
```

### Recommended configuration

Use the default settings by adding it to the extends section of your `.eslintrc`:
```json
{
  "extends": [
    "plugin:jasmine-jquery/recommended"
  ]
}
```

## Supported Rules

### `/no-global-shortcuts`
The recommended config **enables all global shortcut methods by default**. (All methods as of jasmine-jquery v2.1.1, see the complete list [here](https://github.com/xxnatc/eslint-plugin-jasmine-jquery/blob/master/lib/global-shortcut-config.js).)

To disallow all jasmine-jquery's global shortcut methods, configure this rule:
```json
{
  "rules": {
    "jasmine-jquery/no-global-shortcuts": 2
  }
}
```

#### Options
To allow certain methods, pass in an array as the second argument containing the exceptions:
```json
{
  "rules": {
    "jasmine-jquery/no-global-shortcuts": [2, ["loadFixtures", "setFixtures"]]
  }
}
```

This will throw an error for any global shortcut method except `loadFixtures()` and `setFixtures()`.

## Development

#### Install dev dependencies
```
npm install
```

#### Run tests
```
npm test
```

## Issues, Bugs, and Suggestions

Report any issues or submit suggestions for rules on [GitHub](https://github.com/xxnatc/eslint-plugin-jasmine-jquery).
