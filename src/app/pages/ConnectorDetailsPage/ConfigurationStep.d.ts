import { FC } from 'react';
export declare type ConfigurationType = {
    [key: string]: any;
};
export declare type ConfigurationStepProps = {
    editMode: boolean;
    schema: Record<string, any>;
    configuration: unknown;
};
export declare const ConfigurationStep: FC<ConfigurationStepProps>;
