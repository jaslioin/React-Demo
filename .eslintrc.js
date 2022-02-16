module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  env: {
    es6: true,
    browser: true,
  },
  plugins: ["react", "@typescript-eslint"],
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/jsx-runtime",
  ],
  rules: {
    "max-len": "off",
    "react/require-default-props": "off",
    "react/jsx-no-bind": "off",
    "linebreak-style": 0, // windows/unix system compatible
    "react/forbid-prop-types": 0,
    "react/jsx-filename-extension": 0,
    "import/no-extraneous-dependencies": [
      2,
      {
        devDependencies: true,
      },
    ],
    quotes: ["error", "double"],
    "import/prefer-default-export": 0,
    "no-console": 0,
    "react/jsx-indent": 1,
    "react/prop-types": 0,
    "react/jsx-props-no-spreading": 0,
    "no-use-before-define": 0,
    "no-underscore-dangle": 0,
    "import/no-unresolved": 0, // false alarm
    "import/extensions": 0, // extension not needed
    "@typescript-eslint/explicit-module-boundary-types": 0, // inferred
    "no-tabs": 0, // wtf
    indent: 0,
    "object-curly-newline": 0, // ugly
    "react/destructuring-assignment": 0,
    "no-mixed-spaces-and-tabs": 0, // why not
    "react/function-component-definition": 0,
    "no-shadow": 0, // broken rule
  },
  settings: {
    react: {
      createClass: "createReactClass", // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: "React", // Pragma to use, default to "React"
      fragment: "Fragment", // Fragment to use (may be a property of <pragma>), default to "Fragment"
      version: "detect", // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // default to latest and warns if missing
      // It will default to "detect" in the future
      flowVersion: "0.53", // Flow version
    },
    propWrapperFunctions: [
      "forbidExtraProps",
      { property: "freeze", object: "Object" },
      { property: "myFavoriteWrapper" },
    ],
    componentWrapperFunctions: [
      "observer", // `property`
      { property: "styled" }, // `object` is optional
      { property: "observer", object: "Mobx" },
      { property: "observer", object: "<pragma>" }, // sets `object` to whatever value `settings.react.pragma` is set to
    ],
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      "Hyperlink",
      { name: "Link", linkAttribute: "to" },
    ],
  },
};
