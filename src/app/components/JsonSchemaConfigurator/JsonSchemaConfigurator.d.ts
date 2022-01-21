import { ValidateFunction } from 'ajv';
import { FunctionComponent } from 'react';
export declare function createValidator(schema: object): (model: object) => {
    details: import("ajv").ErrorObject<string, Record<string, any>, unknown>[];
} | null;
export declare type CreateValidatorType = ReturnType<typeof createValidator>;
export declare type ValidatorResultType = ValidateFunction<unknown>['errors'];
declare type JsonSchemaConfiguratorProps = {
    schema: Record<string, any>;
    configuration: unknown;
    onChange: (configuration: unknown, isValid: boolean) => void;
};
export declare const JsonSchemaConfigurator: FunctionComponent<JsonSchemaConfiguratorProps>;
export {};
