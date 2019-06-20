module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "es6": true
  },
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "react/jsx-filename-extension": "off",
    "import/no-named-default": "off",
    "import/prefer-default-export": "off"
  },
  "settings": {
    "import/resolver": {
      "babel-plugin-root-import": {
        rootPathPrefix: "~",
        rootPathSuffix: "src"
      }
    }
  }
};

