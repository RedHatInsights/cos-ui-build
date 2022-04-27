import { FunctionComponent } from 'react';
declare type ConnectorStatusProps = {
    name: string;
    status: string;
};
export declare const ConnectorStatus: FunctionComponent<ConnectorStatusProps>;
export declare const ConnectorStatusIcon: FunctionComponent<ConnectorStatusProps>;
export declare function useConnectorStatusLabel(status: string): string;
export {};
