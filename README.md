# Thou shalt not

> Je n'ai pas plus de génie que les autres, mais plus de méthode.
>
> *René Descartes*

`thou-shalt-not` is a set of eslint configurations. Available configurations are:

- es5: `thou-shalt-not`
- es6: `thou-shalt-not/es6`, `thou-shalt-not/es6/strict`
- nodejs: `thou-shalt-not/node`
- angular: `thou-shalt-not/angular`, `thou-shalt-not/angular/strict`

The `strict` modules should be used for new projects.

## Thou shalt install

```
npm i git+ssh://git@git.famicity.com:nbarbotte/thou-shalt-not.git --save-dev
```

And, for angular projects:

```
npm i eslint-config-angular --save-dev
npm i eslint-plugin-angular --save-dev
```

## Thou shalt configure

Edit your eslint configuration, and use the proper `thou-shalt-not` module.

For example:

```
extends:
  - 'thou-shalt-not/es6'
  - 'thou-shalt-not/angular'
```

If you want to disable a configuration (see [here](http://eslint.org/docs/user-guide/configuring.html#configuration-cascading-and-hierarchy)), extend its
given `off` module.

For example:

```
extends:
  - 'thou-shalt-not/node'
  - 'thou-shalt-not/es6/off'
  - 'thou-shalt-not/angular/off'
```