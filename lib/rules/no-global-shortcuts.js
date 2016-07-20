var _ = require('underscore');

var globalShortcutNames = Object.keys(require(__dirname + '/../global-shortcut-config'));

module.exports = {
  meta: {
    schema: [{
      type: 'array',
      items: { type: 'string' },
      uniqueItems: true
    }]
  },

  create: function(context) {
    if (context.options.length && context.options[0].length) {
      globalShortcutNames = _.difference(globalShortcutNames, context.options[0]);
    }
    var filterRegex = new RegExp('^(' + globalShortcutNames.join('|') + ')$');

    return {
      CallExpression: function(node) {
        var result = node.callee && node.callee.name && node.callee.name.match(filterRegex);

        if (result) {
          context.report({
            node: node,
            message: 'Unexpected shortcut function \'{{identifier}}\'',
            data: { identifier: result[1] }
          });
        }
      }
    };
  }
};
