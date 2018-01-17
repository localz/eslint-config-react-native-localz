module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'prettier'
  ],
  plugins: [
    'react',
    'react-native',
    'prettier',
    'unicorn'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    'prettier/prettier': ['error',
      {
        "bracketSpacing": true,
        "jsxBracketSameLine": true,
        "printWidth": 80,
        "singleQuote": true,
        "semi": false,
        "useTabs": false
      }
    ],
    'react/no-deprecated': 'error',
    'react/no-children-prop': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/default-props-match-prop-types': 'error',
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-handler-names': 'error',
    'react/jsx-max-props-per-line': [
      'error',
      {
        'maximum': 1,
        'when': 'multiline'
      }
    ],
    'react/jsx-sort-props': [
      'error',
      {
        'callbacksLast': true,
        'shorthandFirst': true,
        'noSortAlphabetically': true,
        'reservedFirst': true
      }
    ],
    'react/jsx-no-duplicate-props': [
      'error',
      {
        'ignoreCase': true
      }
    ],
    'react/jsx-uses-vars': 'error',
    'react/jsx-uses-react': 'error',
    'react-native/no-unused-styles': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'arrow-body-style': ['error', 'as-needed'],
    'unicorn/catch-error-name': 'error',
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/throw-new-error': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/no-array-instanceof': 'error',
    'unicorn/no-new-buffer': 'error',
    'unicorn/no-hex-escape': 'error',
    'unicorn/prefer-starts-ends-with': 'error',
    'unicorn/prefer-type-error': 'error',
    'unicorn/import-index': 'error',
    'unicorn/new-for-builtins': 'error',
    'unicorn/filename-case': ['error', {'case': 'kebabCase'}]
  },
  'overrides': [
    {
      'files': ['src/components/**/*.js', 'src/containers/**/*.js'],
      'rules': {
        'unicorn/filename-case': ['error', {'case': 'pascalCase'}]
      }
    },
    {
      'files': ['**/*.test.js'],
      'rules': {
        'unicorn/filename-case': 0
      }
    }
  ]
}
