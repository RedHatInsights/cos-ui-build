import { FC } from 'react';
import { Connector } from '@rhoas/connector-management-sdk';
export interface OverviewTabProps {
    connectorData: Connector;
}
export declare const OverviewTab: FC<OverviewTabProps>;
