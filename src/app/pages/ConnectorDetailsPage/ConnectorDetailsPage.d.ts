import { FC } from 'react';
import { Connector } from '@rhoas/connector-management-sdk';
export interface ParamTypes {
    id: string;
}
export declare const ConnectorDetailsPage: FC;
export declare type ConnectorDetailsHeaderProps = {
    connectorData: Connector;
};
export declare const ConnectorDetailsHeader: FC<ConnectorDetailsHeaderProps>;
