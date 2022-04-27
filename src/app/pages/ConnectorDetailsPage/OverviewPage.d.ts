import { FC } from 'react';
import { Connector } from '@rhoas/connector-management-sdk';
export interface OverviewPageProps {
    connectorData: Connector;
}
export declare const OverviewPage: FC<OverviewPageProps>;
