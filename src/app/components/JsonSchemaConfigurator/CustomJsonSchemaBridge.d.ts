import JSONSchemaBridge from 'uniforms-bridge-json-schema';
/**
 * Typed module to tell uniforms what properties should not be
 * applied to DOM elements.  Add entries to this whenever a lot
 * of warnings around invalid property names show up when
 * rendering a form
 */
declare module 'uniforms' {
    interface FilterDOMProps {
        additionalProperties: never;
        helperText: never;
        labelIcon: never;
    }
}
/**
 * Simple reference resolver that works with references contained in the
 * same schema object
 * @param ref
 * @param schema
 * @returns
 */
export declare const resolveReference: (ref: string, schema: Record<string, any>) => Record<string, any>;
/**
 * Get whatever the default value is for a given property in the given
 * schema recursively
 * @param propertyName
 * @param schema
 * @returns
 */
export declare const createDefaultFromSchema: (propertyName: string, schema: Record<string, any>) => any;
/**
 * CustomJsonSchemaBridge generates the appropriate attributes for uniforms-patternfly
 * based on the incoming model data
 */
export declare class CustomJsonSchemaBridge extends JSONSchemaBridge {
    disableCredentials: boolean;
    constructor(schema: any, validator: any, disableCredentials?: boolean);
    /**
     * Returns the element properties for the named field.  Properties
     * that should be excluded from DOM properties should be added to
     * FilterDOMProps
     * @param name
     * @returns
     */
    getProps(name: string): any;
    getField(name: string): Record<string, any>;
}
