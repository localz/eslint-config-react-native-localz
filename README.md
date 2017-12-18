# eslint-config-react-native-localz

This config will also integrate prettier into your eslint workflow... no need for a `.prettierrc`!

## Install

```
$ npm install eslint-config-react-native-localz prettier --save-dev
```

## Usage

Add `react-native-localz` as an eslint configuration -- either:

1. In `package.json`: 

```
"eslintConfig": {
  "extends": [
    ...
    "react-native-localz",
    ...
  ],
  ...
}
```

### OR


2. In `.eslintrc`/`.eslintrc.json`:

```
{
  "extends": [
    ...
    "react-native-localz",
    ...
  ],
  ...
}
```

## License

MIT © [Localz](https://localz.com)