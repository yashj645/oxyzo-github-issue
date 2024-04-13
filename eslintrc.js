export default [
  {
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      "import/no-anonymous-default-export": [
        "error",
        {
          allowArray: false,
          allowArrowFunction: false,
          allowAnonymousClass: false,
          allowAnonymousFunction: false,
          allowCallExpression: true, // The true value here is for backward compatibility
          allowNew: false,
          allowLiteral: false,
          allowObject: false,
        },
      ],
    },
  },
];