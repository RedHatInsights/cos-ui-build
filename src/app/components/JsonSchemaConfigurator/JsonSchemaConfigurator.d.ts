import { createValidator } from '@utils/createValidator';
import { ValidateFunction } from 'ajv';
import { FunctionComponent } from 'react';
import './JsonSchemaConfigurator.css';
export declare type CreateValidatorType = ReturnType<typeof createValidator>;
export declare type ValidatorResultType = ValidateFunction<unknown>['errors'];
declare type JsonSchemaConfiguratorProps = {
    schema: Record<string, any>;
    configuration: unknown;
    onChange: (configuration: unknown, isValid: boolean) => void;
    editCase?: boolean;
};
export declare const JsonSchemaConfigurator: FunctionComponent<JsonSchemaConfiguratorProps>;
export {};
