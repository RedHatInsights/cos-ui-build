import { FC } from 'react';
import { Connector } from '@rhoas/connector-management-sdk';
export interface ParamTypes {
    id: string;
}
declare type ConnectorDetailsPageProps = {
    onSave: () => void;
};
export declare const ConnectorDetailsPage: FC<ConnectorDetailsPageProps>;
export declare type ConnectorDetailsHeaderProps = {
    connectorData: Connector;
};
export declare const ConnectorDetailsHeader: FC<ConnectorDetailsHeaderProps>;
export {};
