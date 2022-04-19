import { TFunction } from 'react-i18next';
import JSONSchemaBridge from 'uniforms-bridge-json-schema';
/**
 * CustomJsonSchemaBridge generates the appropriate attributes for uniforms-patternfly
 * based on the incoming model data
 */
export declare class CustomJsonSchemaBridge extends JSONSchemaBridge {
    showCredentialHelpText: boolean;
    t: TFunction<'translation', undefined>;
    constructor(schema: any, validator: any, t: TFunction<'translation', undefined>, showCredentialHelpText: boolean);
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
