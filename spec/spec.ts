import { BinaryDecoder, BinaryEncoder } from "../index";

it("", () => {
    const uint8Array1 = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8]);
    const binaryDecoder = new BinaryDecoder(uint8Array1.buffer);

    const a = binaryDecoder.getUint32();
    expect(a).toEqual(67305985);

    const b = binaryDecoder.getUint32();
    expect(b).toEqual(134678021);

    const aBinary = BinaryEncoder.fromUint32(a);
    expect(aBinary).toEqual(new Uint8Array([1, 2, 3, 4]));

    const bBinary = BinaryEncoder.fromUint32(b);
    expect(bBinary).toEqual(new Uint8Array([5, 6, 7, 8]));

    const uint8Array2 = new Uint8Array(8);
    const binaryEncoder = new BinaryEncoder(uint8Array2);
    binaryEncoder.setBinary(aBinary, bBinary);
    expect(uint8Array2).toEqual(new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8]));
});
