# Changelog

## Unreleased

## 0.16.0 - 2016-09-22

### Added

- Support for "id" prop in controls ([#120](https://github.com/narqo/react-islands/pull/120), [#121](https://github.com/narqo/react-islands/pull/121)).

## 0.15.0 - 2016-09-20

### Added

- TextArea, TextInput: add onClick to props ([#118](https://github.com/narqo/react-islands/pull/118)).
- TextArea, TextInput: add missing propTypes ([#119](https://github.com/narqo/react-islands/pull/119)).

### Fixed

- Select: fix "ref" name of Button ([#117](https://github.com/narqo/react-islands/pull/117)).

## 0.14.1 - 2016-09-16

### Fixed

- Popup: fix `findDOMNode()` call inside `componentWillUnmount` hook ([#114](https://github.com/narqo/react-islands/issues/114)).

## 0.14.0 - 2016-09-06

### Added

- Menu: Implement type-ahead search ([#39](https://github.com/narqo/react-islands/issues/39)).
- Popup: Reposition when parents is scrolled ([#43](https://github.com/narqo/react-islands/issues/43)).

### Fixed

- Control: Fix `focused` props handling ([#107](https://github.com/narqo/react-islands/issues/107)).
- Menu, Select: Fix `focused` state management; Menu: Fix scroll to selected item ([#111](https://github.com/narqo/react-islands/issues/111)).

## 0.13.3 - 2016-08-21

### Fixed

- Layout, Popup: some handlers miss `this.props` argument ([#101](https://github.com/narqo/react-islands/issues/101)).

## 0.13.2 - 2016-08-18

### Fixed

- Menu: Fix internal cache flushing ([#100](https://github.com/narqo/react-islands/pull/100)).

## 0.13.1 - 2016-08-17

### Fixed

- Add `_js_inited` suffix to class names ([#98](https://github.com/narqo/react-islands/pull/98)).
- Fix scripts/generate-main.sh to work properly on Linux.

## 0.13.0 - 2016-08-04

### Added

- Link: add examples and tests for `view` prop ([#94](https://github.com/narqo/react-islands/pull/94)).

## 0.12.1 - 2016-08-01

### Fixed

- Select: prevent internal Button from form submission ([#91](https://github.com/narqo/react-islands/pull/91)).

## 0.12.0 - 2016-07-28

### Added

- Link: add `view` prop ([#89](https://github.com/narqo/react-islands/pull/89)).

## 0.11.1 - 2016-07-28

### Fixed

- Menu: Fix value validation in `mode=radio` ([#87](https://github.com/narqo/react-islands/pull/87)).

## 0.11.0 - 2016-07-25

### Added

- Control: pass `this.props` as a second argument to `onFocusChange()` and `onHoverChange()` handlers ([#84](https://github.com/narqo/react-islands/pull/84)), ([#86](https://github.com/narqo/react-islands/pull/86)).
- TextInput: support for `autocomplete` property ([#85](https://github.com/narqo/react-islands/pull/85)).

## 0.10.0 - 2016-07-24

### Added

- pressable: Add "displayName" to wrapped class ([#82](https://github.com/narqo/react-islands/pull/82)).

### Fixed

- `generate-main` script doesn't work on Linux ([#80](https://github.com/narqo/react-islands/pull/80)).
- Overlay: `layerWillBecomeHidden()` and `releaseZIndex()` must be idempotent ([#81](https://github.com/narqo/react-islands/pull/81)).

## 0.9.0 - 2016-07-20

### Added

- MenuItem: support for `type` property ([#75](https://github.com/narqo/react-islands/pull/75)).

## 0.8.0 - 2016-07-17

### Added

- Button: support for `title` property ([#74](https://github.com/narqo/react-islands/pull/74)).

## 0.7.1 - 2016-07-16

### Fixed

- Control: `textValue()` doesn't play nice with numbers ([#73](https://github.com/narqo/react-islands/pull/73)).
- Select: menu must not be narrower than button ([#71](https://github.com/narqo/react-islands/pull/71)).

### Other

- Add tests for Control.
- Add Select with `_width_available` CSS class example.

## 0.7.0 - 2016-07-03

### Added

- Add a `pre-commit` hook to automatically lint the code before commit ([#70](https://github.com/narqo/react-islands/pull/70)).
- Reduce the overall production size of the module by applying some Babel magic ([#69](https://github.com/narqo/react-islands/pull/69)).

## 0.6.0 - 2016-06-29

### Changed

* Got rid of own states that represented "value" of components:
  - Checkbox, CheckboxGroup: Make components stateless ([#64](https://github.com/narqo/react-islands/pull/64)).
  - Radio, RadioGroup: make components stateless ([#66](https://github.com/narqo/react-islands/pull/66)).
  - TextInput, TextArea: make components stateless ([#67](https://github.com/narqo/react-islands/pull/67)).

### Fixed

* Select: Fit popup into viewport ([#65](https://github.com/narqo/react-islands/pull/65)).

## 0.5.0 - 2016-06-09

### Added

* Components can be imported as a named modules from the package main entrypoint ([#62](https://github.com/narqo/react-islands/pull/62)).

### Changed

* Link, Button: synthetic event is passed as a first argument to the `onClick()` handler ([#61](https://github.com/narqo/react-islands/pull/61)).

### Fixed

* Link, Button: `onClick()` handler must be called only on left button click ([#61](https://github.com/narqo/react-islands/pull/61)).
* Link, Button: Impossible to do a default prevention in `onClick()` handler ([#61](https://github.com/narqo/react-islands/pull/61)).

## 0.4.0 - 2016-06-06

### Added

* New ProgressBar component ([#58](https://github.com/narqo/react-islands/pull/58)).
* New Spinner component ([#57](https://github.com/narqo/react-islands/pull/57)).

## 0.3.1 - 2016-06-05

### Fixed

* Button: pass "type" prop to underlying <button> ([#54](https://github.com/narqo/react-islands/issues/54)).

## 0.3.0 - 2016-06-03

### Added

* Select: add protected method `renderButtonText()` ([#52](https://github.com/narqo/react-islands/issues/47)).
* Link: add unit-tests ([#53](https://github.com/narqo/react-islands/pull/53)).
* Start using [chai-enzyme](https://www.npmjs.com/package/chai-enzyme) for unit-tests.

### Changed

* [warning](https://www.npmjs.com/package/warning) was updated to 3.0.0.

### Fixed

* Link: fix type declaration for "type" prop.

## 0.2.0 - 2016-05-29

### Fixed

* Add missing "key" props ([#47](https://github.com/narqo/react-islands/issues/47)).
* Nothing works in IE 11 ([#45](https://github.com/narqo/react-islands/issues/45)).

### Other

* Fix project license.
* Update readme.

## 0.1.0 - 2016-05-26

* Initial public release.
