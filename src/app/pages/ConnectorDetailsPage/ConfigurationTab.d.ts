import { FC } from 'react';
import { Connector, ConnectorType } from '@rhoas/connector-management-sdk';
import './ConfigurationTab.css';
import { ErrorHandler } from './ConfigurationTab/ErrorHandlerStep';
export declare type ConfigurationTabProps = {
    onSave: () => void;
    editMode: boolean;
    updateEditMode: (editEnable: boolean) => void;
    connectorData: Connector;
    connectorTypeDetails: ConnectorType;
};
export declare type connector = {
    data_shape: object;
    error_handler: ErrorHandler;
    processors: object;
};
export declare const ConfigurationTab: FC<ConfigurationTabProps>;
