# fluent-binary-converter

[![Dependency Status](https://david-dm.org/plantain-00/fluent-binary-converter.svg)](https://david-dm.org/plantain-00/fluent-binary-converter)
[![devDependency Status](https://david-dm.org/plantain-00/fluent-binary-converter/dev-status.svg)](https://david-dm.org/plantain-00/fluent-binary-converter#info=devDependencies)
[![Build Status: Linux](https://travis-ci.org/plantain-00/fluent-binary-converter.svg?branch=master)](https://travis-ci.org/plantain-00/fluent-binary-converter)
[![Build Status: Windows](https://ci.appveyor.com/api/projects/status/github/plantain-00/fluent-binary-converter?branch=master&svg=true)](https://ci.appveyor.com/project/plantain-00/fluent-binary-converter/branch/master)
![Github CI](https://github.com/plantain-00/fluent-binary-converter/workflows/Github%20CI/badge.svg)
[![npm version](https://badge.fury.io/js/fluent-binary-converter.svg)](https://badge.fury.io/js/fluent-binary-converter)
[![Downloads](https://img.shields.io/npm/dm/fluent-binary-converter.svg)](https://www.npmjs.com/package/fluent-binary-converter)
[![gzip size](https://img.badgesize.io/https://unpkg.com/fluent-binary-converter?compression=gzip)](https://unpkg.com/fluent-binary-converter)
[![type-coverage](https://img.shields.io/badge/dynamic/json.svg?label=type-coverage&prefix=%E2%89%A5&suffix=%&query=$.typeCoverage.atLeast&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fplantain-00%2Ffluent-binary-converter%2Fmaster%2Fpackage.json)](https://github.com/plantain-00/fluent-binary-converter)

A Fluent Binary Converter to Convert between ArrayBuffer with number

## install

`npm i fluent-binary-converter`

## usage

```ts
import { BinaryDecoder, BinaryEncoder } from "fluent-binary-converter";
// <script src="fluent-binary-converter/fluent-binary-converter.min.js"></script>
// const { BinaryDecoder, BinaryEncoder } = FluentBinaryConverter;

const source = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8]);
const binaryDecoder = new BinaryDecoder(source.buffer);

const a = binaryDecoder.getUint32(); // 67305985
const b = binaryDecoder.getUint32(); // 134678021

const aBinary = BinaryEncoder.fromUint32(a); // [1, 2, 3, 4]
const bBinary = BinaryEncoder.fromUint32(b); // [5, 6, 7, 8]

const target = new Uint8Array(8); // [0, 0, 0, 0, 0, 0, 0, 0]
new BinaryEncoder(target).setBinary(aBinary, bBinary);// [1, 2, 3, 4, 5, 6, 7, 8]
```

## dependencies

+ TypedArray, or polyfill like `core-js`

## change logs

```ts
// v4
const uint8Array2 = BinaryEncoder.concat(aBinary, bBinary, cBinary);

// v3
const uint8Array2 = new Uint8Array(aBinary.length + bBinary.length + cBinary.length);
const binaryEncoder = new BinaryEncoder(uint8Array2);
binaryEncoder.setBinary(aBinary, bBinary, cBinary);
```

```ts
// v3
BinaryEncoder.fromUint32(true, 123);

// v2
BinaryEncoder.fromUint32(123);
```

```ts
// v2
import { BinaryDecoder, BinaryEncoder } from "fluent-binary-converter/browser";
import { BinaryDecoder, BinaryEncoder } from "fluent-binary-converter/nodejs";

// v1
import { BinaryDecoder, BinaryEncoder } from "fluent-binary-converter";
```
