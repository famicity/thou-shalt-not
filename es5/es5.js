'use strict';

module.exports = {
  rules: {
    'comma-dangle': [2, 'never'],
    'no-cond-assign': 2,
    'no-constant-condition': 2,
    'no-control-regex': 2,
    'no-debugger': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty-character-class': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': 2,
    'no-extra-semi': 2,
    'no-func-assign': 2,
    'no-inner-declarations': 2,
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-negated-in-lhs': 2,
    'no-obj-calls': 2,
    'no-regex-spaces': 2,
    'no-sparse-arrays': 2,
    'no-unreachable': 2,
    'use-isnan': 2,
    'valid-typeof': 2,
    'no-unexpected-multiline': 2,
    'accessor-pairs': 2,
    'block-scoped-var': 2,
    'consistent-return': 2,
    curly: 2,
    'default-case': 2,
    'dot-notation': 1,
    'dot-location': [2, 'property'],
    eqeqeq: 2,
    'guard-for-in': 2,
    'no-alert': 2,
    'no-caller': 2,
    'no-div-regex': 2,
    'no-else-return': 1,
    'no-empty-label': 2,
    'no-eq-null': 1,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-implicit-coercion': 2,
    'no-implied-eval': 2,
    'no-invalid-this': 2,
    'no-iterator': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-native-reassign': 2,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-new': 2,
    'no-octal-escape': 2,
    'no-octal': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-return-assign': [2, 'always'],
    'no-script-url': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-unused-expressions': 2,
    'no-useless-call': 2,
    'no-void': 2,
    'no-warning-comments': 0,
    'no-with': 2,
    radix: 2,
    'wrap-iife': [2, 'inside'],
    yoda: 2,
    strict: [2, 'function'],
    'no-delete-var': 2,
    'no-label-var': 2,
    'no-shadow-restricted-names': 2,
    'no-undef-init': 2,
    'no-undef': 2,
    'no-unused-vars': 1,
    'no-use-before-define': [2, 'nofunc'],
    'callback-return': [1, ['cb', 'callback', 'next', 'done']],
    'handle-callback-err': 1,
    'no-mixed-requires': [2, true],
    'no-new-require': 2,
    'no-path-concat': 2,
    'no-restricted-modules': [2, 'domain', 'freelist', 'smalloc', 'sys'],
    'array-bracket-spacing': [2, 'never'],
    'brace-style': [2, '1tbs', {
      allowSingleLine: false
    }],
    camelcase: [0, {
      properties: 'always'
    }],
    'comma-spacing': [2, {
      before: false,
      after: true
    }],
    'comma-style': [2, 'last'],
    'computed-property-spacing': [2, 'never'],
    'consistent-this': [2, 'self'],
    'eol-last': 2,
    indent: [2, 2, {
      SwitchCase: 1
    }],
    'key-spacing': [2, {
      beforeColon: false,
      afterColon: true
    }],
    'linebreak-style': [2, 'unix'],
    'max-nested-callbacks': [1, 4],
    'new-cap': [2, {
      newIsCap: true,
      capIsNew: true
    }],
    'new-parens': 2,
    'no-array-constructor': 2,
    'no-inline-comments': 1,
    'no-lonely-if': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multiple-empty-lines': [2, {
      max: 1
    }],
    'no-nested-ternary': 2,
    'no-new-object': 2,
    'no-spaced-func': 2,
    'no-trailing-spaces': 2,
    'no-unneeded-ternary': 2,
    'object-curly-spacing': [2, 'never'],
    'one-var': [1, 'never'],
    'operator-assignment': [2, 'always'],
    'operator-linebreak': [2, 'after'],
    'padded-blocks': [1, 'never'],
    'quote-props': [1, 'as-needed'],
    quotes: [2, 'single'],
    'semi-spacing': [2, {
      before: false,
      after: true
    }],
    semi: [2, 'always'],
    'space-after-keywords': [2, 'always'],
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, {
      anonymous: 'never',
      named: 'never'
    }],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-return-throw-case': 2,
    'space-unary-ops': 2,
    'spaced-comment': [1, 'always'],
    'arrow-spacing': [2, {
      before: true,
      after: true
    }],
    'constructor-super': 2,
    'generator-star-spacing': [2, 'before'],
    'no-class-assign': 2,
    'no-const-assign': 2,
    'no-this-before-super': 2
  },
  env: {
    es6: false,
    browser: true,
    node: false
  }
};