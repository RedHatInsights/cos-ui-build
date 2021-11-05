import { FunctionComponent } from 'react';
import './ConnectorStatus.css';
declare type ConnectorStatusProps = {
    name: string;
    status: string;
};
export declare const ConnectorStatus: FunctionComponent<ConnectorStatusProps>;
export declare const ConnectorStatusIcon: FunctionComponent<ConnectorStatusProps>;
export declare enum ConnectorStatuses {
    Ready = "ready",
    Failed = "failed",
    Assigning = "assigning",
    Assigned = "assigned",
    Updating = "updating",
    Provisioning = "provisioning",
    Deleting = "deleting",
    Deleted = "deleted"
}
export declare function useConnectorStatusLabel(status: string): string;
export {};
