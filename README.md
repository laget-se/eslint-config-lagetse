# eslint-config-lagetse

JavaScript linting rules for laget.se.

Extends [`eslint-config-airbnb`](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb), which in turn makes use of [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react) and [`eslint-plugin-jsx-a11y`](https://github.com/evcohen/eslint-plugin-jsx-a11y).

To view a full list of all the rules being applied, run:

```
npm run lint:ls
```

### Setup and usage

Install the config:

```
npm i -D eslint-config-lagetse
```

Add a `.eslintrc` to the project root:

```json
{
  "extends": "lagetse"
}
```

Now go linting!

```json
// package.json
{
  "scripts": {
    "lint:js": "eslint --ext .js --ext .jsx path/to/src/dir"
  }
}
```

```js
// Using gulp
import eslint from 'gulp-eslint';

gulp.task('lint:js', () => {
  gulp.src(['path/to/**/*.js', 'path/to/**/*.jsx'])
    .pipe(eslint());
});
```

### Type-time linting in editors

#### Sublime

https://medium.com/@dan_abramov/lint-like-it-s-2015-6987d44c5b48#.vrv9pvsul
