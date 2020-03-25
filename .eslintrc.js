module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: "airbnb-base",
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    rules: {
        "linebreak-style": ["error", "windows"]
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module"
    },
    rules: {}
};