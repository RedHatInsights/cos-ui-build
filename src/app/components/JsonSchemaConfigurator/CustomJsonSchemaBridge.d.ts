import JSONSchemaBridge from 'uniforms-bridge-json-schema';
/**
 * CustomJsonSchemaBridge generates the appropriate attributes for uniforms-patternfly
 * based on the incoming model data
 */
export declare class CustomJsonSchemaBridge extends JSONSchemaBridge {
    constructor(schema: any, validator: any);
    getField(name: string): Record<string, any>;
}
