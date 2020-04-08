module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "plugin:react/all",
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "prettier",
    "prettier/react"
  ],
  plugins: ["@typescript-eslint"],
  settings: {
    react: {
      version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  },
  rules: {
    "react/function-component-definition": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-no-bind": "off",
    "react/prop-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "react/jsx-no-literals": "off",
    "react/display-name": "off"
  }
};