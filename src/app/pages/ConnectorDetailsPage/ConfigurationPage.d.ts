import { FC } from 'react';
import { Connector, ConnectorType } from '@rhoas/connector-management-sdk';
import './ConfigurationPage.css';
import { ErrorHandler } from './ErrorHandlerStep';
export declare type ConfigurationPageProps = {
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
export declare const ConfigurationPage: FC<ConfigurationPageProps>;
