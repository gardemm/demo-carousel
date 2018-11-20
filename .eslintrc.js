module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "node": true
  },
  "parserOptions": {
    "parser": "babel-eslint"
  },
  "extends": [
    "plugin:vue/essential"
  ],
  "plugins": [
    "vue"
  ],
  "rules": {
    "vue/script-indent": ["error", 2, {"baseIndent": 1}],
    "semi": ["error", "never"],
    "arrow-parens": "off",
    "no-floating-decimal": "off",
    "no-console": "off",
    "no-mixed-operators": "off",
    "no-plusplus": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-dynamic-require": "off",
    "no-unused-expressions": "off",
    "import/prefer-default-export": "off"
  },
  "globals": {
    "window": true,
    "document": true,
    "fetch": true,
  },
}
