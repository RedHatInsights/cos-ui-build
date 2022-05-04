export declare const mapToObject: (inputMap: Map<string, unknown>) => object;
/**
 * Calculate the time remaining before expiry
 * @param expireTime
 * @returns
 */
export declare const getPendingTime: (expireTime: Date) => {
    hours: number;
    min: number;
};
declare type AlertType = 'info' | 'warning' | 'danger' | undefined;
/**
 * Calculate the time remaining before expiry and return the alert type based on that
 * @param expireTime
 * @returns
 * "info" if time remaining > 24 hr
 * "warning" if time remaining >= 3 hr
 * "danger" if time remaining < 3hr
 */
export declare const warningType: (expireTime: Date) => AlertType;
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
 * Returns a new object that does not contain empty objects as values
 * and leaves the passed in value untouched.
 * @param obj
 * @returns
 */
export declare const clearEmptyObjectValues: (obj: any) => any;
/**
 * Applies client-side workarounds to possible discrepencies in the configuration.
 *
 * Applies a default datashape value from the schema if the configuration object doesn't have one.
 *
 * @param schema
 * @param configuration
 * @returns
 */
export declare const patchConfigurationObject: (schema: Record<string, any>, configuration: {
    [key: string]: any;
    data_shape: any;
}) => any;
export {};
