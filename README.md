# bootstrap4

This is a fork of
[Bootstrap 4.6.2](https://github.com/twbs/bootstrap/tree/v4.6.2)
with solely focussing on the SCSS part to keep it up to date with current
versions of the [SASS npm package](https://www.npmjs.com/package/sass).

It is meant to be used with the LTS version of
[node.js](https://nodejs.org/en/download).

From the JS part of Bootstrap 4.6.2 I only included the minified bundle version,
because that is the one I use in my projects. See: `./build/js/`

## Prerequisites

 - node.js v20.9.0
 - npm v10.1.0
 - grunt-cli v1.2.0 : `npm install -g grunt-cli`

## Building

    $ npm install
    $ grunt

This will compile Bootstrap to `./build/css/` and create a `_variables.scss`
file for customization / including in own projects in `./build/scss/`.

It also spawns a watch task if changes are made to ***.scss** files or the
**copyvars.js** file. Exit with <kbd>CTRL</kbd>+<kbd>C</kbd>.

## License (MIT)*

The MIT License (MIT)

Copyright (c) 2023 Jan Wassermann

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*for the license of Bootstrap 4.6.2 itself see: `./bootstrap-4.6.2/LICENSE`
