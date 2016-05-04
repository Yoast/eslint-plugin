# eslint-plugin-yoast

An ESLint plugin to provide custom rules necessary for the ESLint config

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-yoast`:

```
$ npm install eslint-plugin-yoast --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-yoast` globally.

## Usage

Add `yoast` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "yoast"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "yoast/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





