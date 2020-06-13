import test from 'ava'
import { BinaryDecoder, BinaryEncoder } from '../src'

test('BinaryDecoder BinaryEncoder', (t) => {
  const uint8Array1 = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 119, 119, 119])
  const binaryDecoder = new BinaryDecoder(uint8Array1.buffer as ArrayBuffer)

  const a = binaryDecoder.getUint32()
  t.is(a, 67305985)

  const b = binaryDecoder.getUint32()
  t.is(b, 134678021)

  const c = binaryDecoder.getString(3)
  t.is(c, 'www')

  const aBinary = BinaryEncoder.fromUint32(true, a)
  t.deepEqual(aBinary, new Uint8Array([1, 2, 3, 4]))

  const bBinary = BinaryEncoder.fromUint32(true, b)
  t.deepEqual(bBinary, new Uint8Array([5, 6, 7, 8]))

  const cBinary = BinaryEncoder.fromString('www')
  t.deepEqual(cBinary, new Uint8Array([119, 119, 119]))

  const uint8Array2 = BinaryEncoder.concat(aBinary, bBinary, cBinary)
  t.deepEqual(uint8Array2, new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 119, 119, 119]))
})
