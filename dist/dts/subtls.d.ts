import type { Socket } from 'net';

declare const allKeyUsages: readonly ["digitalSignature", "nonRepudiation", "keyEncipherment", "dataEncipherment", "keyAgreement", "keyCertSign", "cRLSign", "encipherOnly", "decipherOnly"];

declare class ASN1Bytes extends Bytes {
    readASN1Length(comment?: string): number;
    expectASN1Length(comment?: string): readonly [() => void, () => number];
    readASN1OID(comment?: string): string;
    readASN1Boolean(comment?: string): boolean;
    readASN1UTCTime(): Date;
    readASN1GeneralizedTime(): Date;
    readASN1BitString(): Uint8Array<ArrayBuffer>;
}

export declare function base64Decode(input: string, charCodes?: typeof stdCharCodes, autoPad?: boolean): Uint8Array<ArrayBuffer>;

declare class Bytes {
    offset: number;
    dataView: DataView;
    data: Uint8Array;
    comments: Record<number, string>;
    indents: Record<number, number>;
    indent: number;
    constructor(arrayOrMaxBytes: number | Uint8Array);
    extend(arrayOrMaxBytes: number | Uint8Array): void;
    remaining(): number;
    subarray(length: number): Uint8Array<ArrayBufferLike>;
    skip(length: number, comment?: string): this;
    comment(s: string, offset?: number): this;
    lengthComment(length: number, comment?: string, inclusive?: boolean): string;
    readBytes(length: number): Uint8Array<ArrayBuffer>;
    readUTF8String(length: number): string;
    readUTF8StringNullTerminated(): string;
    readUint8(comment?: string): number;
    readUint16(comment?: string): number;
    readUint24(comment?: string): number;
    readUint32(comment?: string): number;
    expectBytes(expected: Uint8Array | number[], comment?: string): void;
    expectUint8(expectedValue: number, comment?: string): void;
    expectUint16(expectedValue: number, comment?: string): void;
    expectUint24(expectedValue: number, comment?: string): void;
    expectUint32(expectedValue: number, comment?: string): void;
    expectLength(length: number, indentDelta?: number): readonly [() => void, () => number];
    expectLengthUint8(comment?: string): readonly [() => void, () => number];
    expectLengthUint16(comment?: string): readonly [() => void, () => number];
    expectLengthUint24(comment?: string): readonly [() => void, () => number];
    expectLengthUint32(comment?: string): readonly [() => void, () => number];
    expectLengthUint8Incl(comment?: string): readonly [() => void, () => number];
    expectLengthUint16Incl(comment?: string): readonly [() => void, () => number];
    expectLengthUint24Incl(comment?: string): readonly [() => void, () => number];
    expectLengthUint32Incl(comment?: string): readonly [() => void, () => number];
    writeBytes(bytes: number[] | Uint8Array): this;
    writeUTF8String(s: string): this;
    writeUTF8StringNullTerminated(s: string): this;
    writeUint8(value: number, comment?: string): Bytes;
    writeUint16(value: number, comment?: string): Bytes;
    writeUint24(value: number, comment?: string): Bytes;
    writeUint32(value: number, comment?: string): Bytes;
    _writeLengthGeneric(lengthBytes: 1 | 2 | 3 | 4, inclusive: boolean, comment?: string): () => void;
    writeLengthUint8(comment?: string): () => void;
    writeLengthUint16(comment?: string): () => void;
    writeLengthUint24(comment?: string): () => void;
    writeLengthUint32(comment?: string): () => void;
    writeLengthUint8Incl(comment?: string): () => void;
    writeLengthUint16Incl(comment?: string): () => void;
    writeLengthUint24Incl(comment?: string): () => void;
    writeLengthUint32Incl(comment?: string): () => void;
    array(): Uint8Array<ArrayBufferLike>;
    commentedString(all?: boolean): string;
}

declare class Cert {
    serialNumber: Uint8Array;
    algorithm: OID;
    issuer: DistinguishedName;
    validityPeriod: {
        notBefore: Date;
        notAfter: Date;
    };
    subject: DistinguishedName;
    publicKey: {
        identifiers: OID[];
        data: Uint8Array;
        all: Uint8Array;
    };
    signature: Uint8Array;
    keyUsage?: {
        critical?: boolean;
        usages: Set<typeof allKeyUsages[number]>;
    };
    subjectAltNames?: string[];
    extKeyUsage?: {
        clientTls?: true;
        serverTls?: true;
    };
    authorityKeyIdentifier?: Uint8Array;
    subjectKeyIdentifier?: Uint8Array;
    basicConstraints?: {
        critical?: boolean;
        ca?: boolean;
        pathLength?: number;
    } | undefined;
    signedData: Uint8Array;
    static distinguishedNamesAreEqual(dn1: DistinguishedName, dn2: DistinguishedName): boolean;
    static stringFromDistinguishedName(dn: DistinguishedName): string;
    constructor(certData: Uint8Array | ASN1Bytes | CertJSON);
    subjectAltNameMatchingHost(host: string): string | undefined;
    isValidAtMoment(moment?: Date): boolean;
    description(): string;
    toJSON(): {
        serialNumber: string;
        algorithm: string;
        issuer: DistinguishedName;
        validityPeriod: {
            notBefore: string;
            notAfter: string;
        };
        subject: DistinguishedName;
        publicKey: {
            identifiers: string[];
            data: string;
            all: string;
        };
        signature: string;
        keyUsage: {
            critical: boolean | undefined;
            usages: ("digitalSignature" | "nonRepudiation" | "keyEncipherment" | "dataEncipherment" | "keyAgreement" | "keyCertSign" | "cRLSign" | "encipherOnly" | "decipherOnly")[];
        };
        subjectAltNames: string[] | undefined;
        extKeyUsage: {
            clientTls?: true;
            serverTls?: true;
        } | undefined;
        authorityKeyIdentifier: string | undefined;
        subjectKeyIdentifier: string | undefined;
        basicConstraints: {
            critical?: boolean;
            ca?: boolean;
            pathLength?: number;
        } | undefined;
        signedData: string;
    };
    static uint8ArraysFromPEM(pem: string): Uint8Array<ArrayBuffer>[];
    static fromPEM(pem: string): Cert[];
}

declare type CertJSON = ReturnType<typeof Cert.prototype.toJSON>;

declare interface DataRequest {
    bytes: number;
    resolve: (data: Uint8Array | undefined) => void;
}

declare type DistinguishedName = Record<string, string | string[]>;

export declare function hexFromU8(u8: Uint8Array | number[], spacer?: string): string;

declare type OID = string;

declare abstract class ReadQueue {
    queue: Uint8Array[];
    outstandingRequest: DataRequest | undefined;
    constructor();
    abstract socketIsNotClosed(): boolean;
    enqueue(data: Uint8Array): void;
    dequeue(): void;
    bytesInQueue(): number;
    read(bytes: number): Promise<Uint8Array<ArrayBufferLike> | undefined>;
}

declare type RootCertsData = Uint8Array;

declare interface RootCertsDatabase {
    index: RootCertsIndex;
    data: RootCertsData;
}

declare interface RootCertsIndex {
    offsets: number[];
    subjects: Record<string, number>;
}

export declare class SocketReadQueue extends ReadQueue {
    private socket;
    constructor(socket: Socket);
    socketIsNotClosed(): boolean;
}

export declare function stableStringify(x: any, replacer?: (key: string, value: any) => any, indent?: string | number): string;

export declare function startTls(host: string, rootCertsDatabase: RootCertsDatabase | string, networkRead: (bytes: number) => Promise<Uint8Array | undefined>, networkWrite: (data: Uint8Array) => void, { useSNI, requireServerTlsExtKeyUsage, requireDigitalSigKeyUsage, writePreData, expectPreData, commentPreData }?: {
    useSNI?: boolean;
    requireServerTlsExtKeyUsage?: boolean;
    requireDigitalSigKeyUsage?: boolean;
    writePreData?: Uint8Array;
    expectPreData?: Uint8Array;
    commentPreData?: string;
}): Promise<readonly [() => Promise<Uint8Array<ArrayBufferLike> | undefined>, (data: Uint8Array) => Promise<void>]>;

declare function stdCharCodes(charCode: number): number | void;

export declare class TrustedCert extends Cert {
    static databaseFromPEM(pem: string): RootCertsDatabase;
    static findInDatabase(subjectOrSubjectKeyId: DistinguishedName | string, db: RootCertsDatabase): TrustedCert | undefined;
}

export declare function u8FromHex(hex: string): Uint8Array<ArrayBuffer>;

export declare class WebSocketReadQueue extends ReadQueue {
    private socket;
    constructor(socket: WebSocket);
    socketIsNotClosed(): boolean;
}

export { }
