export declare function createValidator(schema: object): (model: object) => {
    details: import("ajv").ErrorObject<string, Record<string, any>, unknown>[];
} | null;
