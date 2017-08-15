/**
 * @public
 */
export class BinaryDecoder {
    dataView: DataView;
    constructor(public arrayBuffer: ArrayBuffer, public index = 0) {
        this.dataView = new DataView(arrayBuffer);
    }

    getInt8() {
        const result = this.dataView.getInt8(this.index);
        this.index += 1;
        return result;
    }
    getUint8() {
        const result = this.dataView.getUint8(this.index);
        this.index += 1;
        return result;
    }

    getInt16() {
        const result = this.dataView.getInt16(this.index, true);
        this.index += 2;
        return result;
    }
    getUint16() {
        const result = this.dataView.getUint16(this.index, true);
        this.index += 2;
        return result;
    }

    getInt32() {
        const result = this.dataView.getInt32(this.index, true);
        this.index += 4;
        return result;
    }
    getUint32() {
        const result = this.dataView.getUint32(this.index, true);
        this.index += 4;
        return result;
    }
    getFloat32() {
        const result = this.dataView.getFloat32(this.index, true);
        this.index += 4;
        return result;
    }
    getFloat64() {
        const result = this.dataView.getFloat64(this.index, true);
        this.index += 8;
        return result;
    }

    getBinary(length?: number) {
        if (length === undefined) {
            const result = new Uint8Array(this.arrayBuffer, this.index);
            this.index = this.arrayBuffer.byteLength;
            return result;
        } else {
            const result = new Uint8Array(this.arrayBuffer, this.index, length);
            this.index += length;
            return result;
        }
    }
}

/**
 * @public
 */
export class BinaryEncoder {
    static fromInt8(...values: number[]) {
        return new Uint8Array(new Int8Array(values).buffer);
    }

    static fromInt16(...values: number[]) {
        return new Uint8Array(new Int16Array(values).buffer);
    }
    static fromUint16(...values: number[]) {
        return new Uint8Array(new Uint16Array(values).buffer);
    }

    static fromInt32(...values: number[]) {
        return new Uint8Array(new Int32Array(values).buffer);
    }
    static fromUint32(...values: number[]) {
        return new Uint8Array(new Uint32Array(values).buffer);
    }
    static fromFloat32(...values: number[]) {
        return new Uint8Array(new Float32Array(values).buffer);
    }
    static fromFloat64(...values: number[]) {
        return new Uint8Array(new Float64Array(values).buffer);
    }
    index = 0;
    constructor(public uint8Array: Uint8Array) { }
    setBinary(...uint8Arrays: Uint8Array[]) {
        for (const uint8Array of uint8Arrays) {
            this.uint8Array.set(uint8Array, this.index);
            this.index += uint8Array.length;
        }
    }
}
