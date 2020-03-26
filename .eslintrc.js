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
        // "linebreak-style": ["error", "windows"],
        "indent": ["error", 4],
        "comma-dangle": ["error", {
            "arrays": "never",
            "objects": "never",
            "imports": "never",
            "exports": "never",
            "functions": "never"
        }],
        "object-curly-newline": ["error", { "multiline": true, "consistent": true }],
        "import/extensions": ["error", "ignorePackages", {
            "ts": "never",
            "tsx": "never",
            "js": "never",
            "jsx": "never",
            "mjs": "never"
        }],
        "eol-last": "never",
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module"
    },
};