import { FunctionComponent, ReactNode } from 'react';
import { Connector } from '@rhoas/connector-management-sdk';
import './ConnectorDrawer.css';
export declare type ConnectorDrawerProps = {
    children: ReactNode;
    connector?: Connector;
    onClose: () => void;
};
export declare const ConnectorDrawer: FunctionComponent<ConnectorDrawerProps>;
export declare type ConnectorDrawerPanelContentProps = {
    name: string;
    id: string;
    bootstrapServer: string;
    kafkaId: string;
    owner: string;
    namespaceId: string;
    createdAt: Date;
    modifiedAt: Date;
    status: string;
    onClose: () => void;
};
export declare const ConnectorDrawerPanelContent: FunctionComponent<ConnectorDrawerPanelContentProps>;
