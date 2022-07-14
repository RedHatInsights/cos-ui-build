import React, { FC } from 'react';
export declare type CommonStepProp = {
    editMode: boolean;
    configuration: any;
    changeIsValid: (isValid: boolean) => void;
    onUpdateConfiguration: (type: string, update: any) => void;
};
export declare type SecretPlaceholderProp = {
    SAPlaceholder: string;
    onSAPlaceholderChange: (value: string, event: React.FormEvent<HTMLInputElement>) => void;
};
export declare const SecretPlaceholder: FC<SecretPlaceholderProp>;
export declare const CommonStep: FC<CommonStepProp>;
