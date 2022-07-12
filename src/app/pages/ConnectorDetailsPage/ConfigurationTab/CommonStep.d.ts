import { FC } from 'react';
export declare type CommonStepProp = {
    editMode: boolean;
    configuration: any;
    changeIsValid: (isValid: boolean) => void;
    onUpdateConfiguration: (type: string, update: any) => void;
};
export declare const CommonStep: FC<CommonStepProp>;
