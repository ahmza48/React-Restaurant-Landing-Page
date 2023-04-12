module.exports = {
    "env": {
        "browser": false,
        "es2021": true,
        "node":true,
        // ESLINT_NO_DEV_ERRORS=true
    },
    "extends": "plugin:react/recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    // "rules": {},
    // "extends": "eslint:recommended"
    "rules": {
        "no-console": "off"
    }
}
