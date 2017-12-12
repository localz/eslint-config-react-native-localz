module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true
  },
  extends: [
    'standard'
  ],
  plugins: [
    'prettier',
    'react',
    'react-native'
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
    'prettier/prettier': 'error',
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
    'react-native/no-color-literals': 2
  }
}