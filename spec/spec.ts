import { BinaryDecoder, BinaryEncoder } from "../index";

describe("fluent binary converter", () => {
    it("should work", () => {
        const uint8Array = new Uint8Array([1, 2, 3, 4]);
        const binaryDecoder = new BinaryDecoder(uint8Array.buffer);
        const totalBytesCount = binaryDecoder.getUint32();
        console.log(totalBytesCount);
        expect(totalBytesCount).toEqual(67305985);

        const totalBytesCountBinary = BinaryEncoder.fromUint32(totalBytesCount);
        console.log(totalBytesCountBinary);
        expect(totalBytesCountBinary).toEqual(new Uint8Array([1, 2, 3, 4]));
    });
});
