# @pnpm/pkgid-to-filename

> Converts a package ID to a valid file name

<!--@shields('npm', 'travis')-->
[![npm version](https://img.shields.io/npm/v/@pnpm/pkgid-to-filename.svg)](https://www.npmjs.com/package/@pnpm/pkgid-to-filename) [![Build Status](https://img.shields.io/travis/pnpm/pkgid-to-filename/master.svg)](https://travis-ci.org/pnpm/pkgid-to-filename)
<!--/@-->

Most package IDs are already unique and valid filenames, so only the package IDs of local dependencies are converted.

## Installation

```sh
<pnpm|npm|yarn> add @pnpm/pkgid-to-filename
```

## Usage

```js
'use strict'
const pkgIdToFilename = require('@pnpm/pkgid-to-filename').default

pkgIdToFilename('file:./test')
//> local/%2Fhome%2Fzkochan%2Fsrc%2Fpnpm%2Fpkgid-to-filename%2Ftest
```

No changes are done for package ID of non-local package.

```js
pkgIdToFilename('registry.npmjs.org/foo/1.0.0')
//> registry.npmjs.org/foo/1.0.0
```

## License

[MIT](./LICENSE) © [Zoltan Kochan](https://www.kochan.io/)
