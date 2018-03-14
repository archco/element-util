# ElementUtil

[![Build Status](https://travis-ci.org/archco/element-util.svg?branch=master)](https://travis-ci.org/archco/element-util)
[![npm version](https://badge.fury.io/js/element-util.svg)](https://www.npmjs.com/package/element-util)
[![Downloads](https://img.shields.io/npm/dm/element-util.svg)](https://www.npmjs.com/package/element-util)

The javascript library for using DOM Elements conveniently.

## Install

``` sh
npm install element-util
```

## Usage

``` js
import * as ElementUtil from 'element-util';

const elm = ElementUtil.getElement('#app');

// --- or ---
import { addListener } from 'element-util';

addListener('ul > li', 'click', () => console.log('item clicked!'));
```

Please see [ElementUtil API](https://github.com/archco/element-util/tree/master/docs).

## Change Log

[CHANGELOG.md](https://github.com/archco/element-util/blob/master/CHANGELOG.md)

## license

[MIT License](https://github.com/archco/element-util/blob/master/LICENSE)
