Custom Yup Locales
====================

[![npm version](https://badge.fury.io/js/%40aboutbits%2Fyup-locales.svg)](https://badge.fury.io/js/%40aboutbits%2Fyup-locales)

This package includes simplified translations for yup error messages. The main difference lies in the exclusion of the field path.

## Table of content

- [Usage](#usage)
- [Build & Publish](#build--publish)
- [Information](#information)

## Usage

First, you have to install the package:

```bash
npm install @aboutbits/yup-locales
```

Second, you add the custom language packages to your project.

```js
import { setLocale } from 'yup'
import it from '@aboutbits/yup-locales/it'

// If you want that your app returns Italian error messages.
setLocale(it)
```

## Build & Publish

To build and publish the package, simply commit all changes and push them to master. Then run one of the following commands locally:

```bash
npm version patch
npm version minor
npm version major
```

## Information

About Bits is a company based in South Tyrol, Italy. You can find more information about us on [our website](https://aboutbits.it).

### Support

For support, please contact [info@aboutbits.it](mailto:info@aboutbits.it).

### Credits

- [All Contributors](../../contributors)

### License

The MIT License (MIT). Please see the [license file](LICENSE.md) for more information.
