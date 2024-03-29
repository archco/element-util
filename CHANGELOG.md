# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## v1.6.10 - 2022-02-18

- Update dependencies.

## 1.6.9 - 2021-05-11

- Update dependencies.

## [1.6.8] - 2019-12-23

- Fixed protected method `compareNumber` in `ElementSorter` (d8f3a4ae1c2fa8f41815a7146100aa7b85b46736)

## [1.6.5] - 2019-10-17

- Update dependencies.

## [1.6.2] - 2018-06-08

### Changed

- Changed return value of `addListener()` method from `number` to `void`.

## [1.6.1] - 2018-05-31

### Changed

- Changed `toNodeList()`: now available set base element optionally.

## [1.6.0] - 2018-05-10

### Changed

- Improved ElementFilter. #13
  - Added interface `FilterResult`. `execute()` method returns result as `FilterResult`.
  - Removed `hit` property.
  - Added a new option `action`. This action is for each filtered element.

## [1.5.1] - 2018-04-21

### Fixed

- Fixed options argument in the `addListener` and `addOuterListener` methods.

## [1.5.0] - 2018-04-20

### Added

- Add util method `addOuterListener`. #12

## [1.4.3] - 2018-04-15

### Changed

- Update documents and comments.

## [1.4.0] - 2018-03-14

### Added

- Added `.travis.yml`. [![Build Status](https://travis-ci.org/archco/element-util.svg?branch=master)](https://travis-ci.org/archco/element-util)

### Changed

- Changed main testing tool to [ts-jest](https://github.com/kulshekhar/ts-jest). The browser tests is only for the checking compatibility. #8
- Changed `tsconfig.json`. Polyfill is not required any more. #9

## [1.3.1] - 2018-02-25

### Added

- Add base method `getElementsAsArray()`. #6

### Changed

- `ElementSorter`: Set cursor style of table-header when sorting table. #7

## [1.3.0] - 2018-02-23

### Changed

- Change export statement. #5

## [1.2.0] - 2018-01-27

### Added

- Now available multiple class names in `addClass()`, `removeClass()` and `toggleClass()`. #3

### Changed

- Migrate to typescript. #4
- Change class name `ElementSort` -> `ElementSorter`.
- Rename `htmlMode` to `enableHTML` in [ElementFilter.FilterOptions](https://github.com/archco/element-util/blob/master/src/classes/element-filter.ts#L6)

## [1.1.3] - 2017-12-17

### Fixed

- Fix problem in `findAncestor()`. #2

## [1.1.2] - 2017-12-11

### Added

- Adds notice about using polyfill for browser compatibility. Please see [README.md#polyfill](https://github.com/archco/element-util/blob/master/README.md#polyfill)

### Fixed

- Fix compatibility problem in `show()`.

## [1.1.1] - 2017-11-19

### Changed

- `findAncestor()`: It works too if set ancestor parameter as Element.

## [1.1.0] - 2017-10-26

### Added

- Add util methods: `makeHiddenInput()` and `appendHiddenInput()`.

### Fixed

- Fix util method `toggleShow()`.

## [1.0.0] - 2017-10-07

First release. Please see [ElementUtil API](https://github.com/archco/element-util/tree/master/docs).

[Unreleased]: https://github.com/archco/element-util/compare/v1.6.8...HEAD
[1.6.8]: https://github.com/archco/element-util/compare/v1.6.5...v1.6.8
[1.6.5]: https://github.com/archco/element-util/compare/v1.6.2...v1.6.5
[1.6.2]: https://github.com/archco/element-util/compare/v1.6.1...v1.6.2
[1.6.1]: https://github.com/archco/element-util/compare/v1.6.0...v1.6.1
[1.6.0]: https://github.com/archco/element-util/compare/v1.5.1...v1.6.0
[1.5.1]: https://github.com/archco/element-util/compare/v1.5.0...v1.5.1
[1.5.0]: https://github.com/archco/element-util/compare/v1.4.3...v1.5.0
[1.4.3]: https://github.com/archco/element-util/compare/v1.4.0...v1.4.3
[1.4.0]: https://github.com/archco/element-util/compare/v1.3.1...v1.4.0
[1.3.1]: https://github.com/archco/element-util/compare/v1.3.0...v1.3.1
[1.3.0]: https://github.com/archco/element-util/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/archco/element-util/compare/v1.1.3...v1.2.0
[1.1.3]: https://github.com/archco/element-util/compare/v1.1.2...v1.1.3
[1.1.2]: https://github.com/archco/element-util/compare/v1.1.1...v1.1.2
[1.1.1]: https://github.com/archco/element-util/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/archco/element-util/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/archco/element-util/compare/e13504e...v1.0.0
