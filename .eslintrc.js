module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "eslint:recommended",
        "prettier",
        "plugin:prettier/recommended",

    ],
    parser: "@babel/eslint-parser",
    parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ["prettier"],
    rules: {}
}
