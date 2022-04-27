import { FunctionComponent } from 'react';
declare type ConnectedConnectorsPageProps = {
    onCreateConnector: () => void;
    onConnectorDetail: (id: string, goToConnectorDetails: string) => void;
    onDuplicateConnector: (id: string) => void;
};
export declare const ConnectedConnectorsPage: FunctionComponent<ConnectedConnectorsPageProps>;
export declare type ConnectorsPageProps = {
    onCreateConnector: () => void;
    onConnectorDetail: (id: string, goToConnectorDetails: string) => void;
    onDuplicateConnector: (id: string) => void;
};
export declare const ConnectorsPage: FunctionComponent<ConnectorsPageProps>;
export declare type ConnectorsPageBodyProps = {
    onCreateConnector: () => void;
    onConnectorDetail: (id: string, goToConnectorDetails: string) => void;
    onDuplicateConnector: (id: string) => void;
};
export declare const ConnectorsPageBody: FunctionComponent<ConnectorsPageBodyProps>;
export declare type ConnectorsTableProps = {
    onConnectorDetail: (id: string, goToConnectorDetails: string) => void;
    onDuplicateConnector: (id: string) => void;
};
export declare const ConnectedTable: FunctionComponent<ConnectorsTableProps>;
export {};
