import { FC } from 'react';
export declare type ConfigurationStepProps = {
    editMode: boolean;
    schema: Record<string, any>;
    configuration: unknown;
    changeIsValid: (isValid: boolean) => void;
    onUpdateConfiguration: (type: string, update: any) => void;
};
export declare const ConfigurationStep: FC<ConfigurationStepProps>;
declare type DataShape = {
    data: any;
};
export declare const DataShape: FC<DataShape>;
export {};
