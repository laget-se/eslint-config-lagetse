module.exports = {
  'env': {
    'browser': true,
    'node': true,
    'amd': false,
    'commonjs': true,
    'mocha': false,
    'jasmine': false,
    'es6': true
  },
  'parserOptions': {
    'ecmaVersion': 6,
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true
    }
  },
  'extends': 'airbnb',
  'plugins': ['react', 'jsx-a11y'],
  'rules': {
    'brace-style': [2, 'stroustrup', { 'allowSingleLine': true }],
    'max-len': [2, 120, 2, { 'ignoreUrls': true }],

    // When working with words or english phrases as keys, you need to be
    // able to quote keys, like `'My key': 'My value'`.
    'quote-props': [2, 'consistent-as-needed'],

    // We allow missing prop types on stateless functional components, but
    // for shared components, this should be overridden (read in the FEC)
    'react/prop-types': 0,

    // Enforces lifecycle methods being declared at the top of a component
    // class/object.
    "react/sort-comp": [2, {
       "order": [
         "lifecycle",
         "everything-else"
       ],
     }],

    // Provide a way to
    //
    // a) import modules that set globals (the colors package for example) and
    // b) declare a full list of arguments to clarify an API, for example
    //    const myCallback = (err, _data, _state) { /* only interested in err */ }
    'no-unused-vars': [2, {
      'varsIgnorePattern': '[iI]gnored',
      'argsIgnorePattern': '^_'
    }]
  },
};
