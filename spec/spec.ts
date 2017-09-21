import { BinaryDecoder, BinaryEncoder } from "../dist/nodejs";

it("", () => {
    const uint8Array1 = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 119, 119, 119]);
    const binaryDecoder = new BinaryDecoder(uint8Array1.buffer as ArrayBuffer);

    const a = binaryDecoder.getUint32();
    expect(a).toEqual(67305985);

    const b = binaryDecoder.getUint32();
    expect(b).toEqual(134678021);

    const c = binaryDecoder.getString(3);
    expect(c).toEqual("www");

    const aBinary = BinaryEncoder.fromUint32(a);
    expect(aBinary).toEqual(new Uint8Array([1, 2, 3, 4]));

    const bBinary = BinaryEncoder.fromUint32(b);
    expect(bBinary).toEqual(new Uint8Array([5, 6, 7, 8]));

    const uint8Array2 = new Uint8Array(11);
    const binaryEncoder = new BinaryEncoder(uint8Array2);
    binaryEncoder.setBinary(aBinary, bBinary);
    binaryEncoder.setString("www");
    expect(uint8Array2).toEqual(new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 119, 119, 119]));
});
