import { FC } from 'react';
export declare type ErrorHandler = {
    [key: string]: any;
};
export declare type ErrorHandlerStepProps = {
    editMode: boolean;
    schema: Record<string, any>;
    configuration: ErrorHandler;
    changeIsValid: (isValid: boolean) => void;
    onUpdateConfiguration: (type: string, update: any) => void;
};
export declare const ErrorHandlerStep: FC<ErrorHandlerStepProps>;
