import { FC } from 'react';
import { Connector } from '@rhoas/connector-management-sdk';
export declare type CommonStepProp = {
    editMode: boolean;
    configuration: Connector;
};
export declare const CommonStep: FC<CommonStepProp>;
