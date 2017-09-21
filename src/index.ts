/**
 * @public
 */
export class BinaryDecoder {
    private dataView: DataView;
    constructor(public arrayBuffer: ArrayBuffer, public index = 0) {
        this.dataView = new DataView(arrayBuffer);
    }

    public getInt8() {
        const result = this.dataView.getInt8(this.index);
        this.index += 1;
        return result;
    }
    public getUint8() {
        const result = this.dataView.getUint8(this.index);
        this.index += 1;
        return result;
    }

    public getInt16(littleEndian = true) {
        const result = this.dataView.getInt16(this.index, littleEndian);
        this.index += 2;
        return result;
    }
    public getUint16(littleEndian = true) {
        const result = this.dataView.getUint16(this.index, littleEndian);
        this.index += 2;
        return result;
    }

    public getInt32(littleEndian = true) {
        const result = this.dataView.getInt32(this.index, littleEndian);
        this.index += 4;
        return result;
    }
    public getUint32(littleEndian = true) {
        const result = this.dataView.getUint32(this.index, littleEndian);
        this.index += 4;
        return result;
    }
    public getFloat32(littleEndian = true) {
        const result = this.dataView.getFloat32(this.index, littleEndian);
        this.index += 4;
        return result;
    }
    public getFloat64(littleEndian = true) {
        const result = this.dataView.getFloat64(this.index, littleEndian);
        this.index += 8;
        return result;
    }

    public getString(length?: number) {
        const binary = this.getBinary(length);
        const array = [].slice.call(binary);
        return String.fromCharCode(...array);
    }

    public getBinary(length?: number) {
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
    public static fromInt8(...values: number[]) {
        return new Uint8Array(new Int8Array(values).buffer);
    }

    public static fromInt16(...values: number[]) {
        return new Uint8Array(new Int16Array(values).buffer);
    }
    public static fromUint16(...values: number[]) {
        return new Uint8Array(new Uint16Array(values).buffer);
    }

    public static fromInt32(...values: number[]) {
        return new Uint8Array(new Int32Array(values).buffer);
    }
    public static fromUint32(...values: number[]) {
        return new Uint8Array(new Uint32Array(values).buffer);
    }
    public static fromFloat32(...values: number[]) {
        return new Uint8Array(new Float32Array(values).buffer);
    }
    public static fromFloat64(...values: number[]) {
        return new Uint8Array(new Float64Array(values).buffer);
    }
    private index = 0;
    constructor(public uint8Array: Uint8Array) { }
    public setString(unicode: string) {
        const uint8Array = new Uint8Array(unicode.length);
        for (let i = 0; i < unicode.length; i++) {
            uint8Array[i] = unicode.charCodeAt(i);
        }
        this.uint8Array.set(uint8Array, this.index);
        this.index += uint8Array.length;
    }
    public setBinary(...uint8Arrays: Uint8Array[]) {
        for (const uint8Array of uint8Arrays) {
            this.uint8Array.set(uint8Array, this.index);
            this.index += uint8Array.length;
        }
    }
}
