import React, { FunctionComponent } from 'react';
import { AlertProps } from '@rhoas/app-services-ui-shared';
/**
 * Mocks the behaviour of notifications on console.redhat.com
 */
export declare const AlertsProvider: FunctionComponent;
declare type AlertToastGroupProps = {
    alerts: AlertProps[];
    onCloseAlert: (key: string | undefined) => void;
};
export declare const AlertToastGroup: React.FunctionComponent<AlertToastGroupProps>;
export {};
