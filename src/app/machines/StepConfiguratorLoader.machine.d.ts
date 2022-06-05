import { ComponentType } from 'react';
import { ConnectorType } from '@rhoas/connector-management-sdk';
export declare enum ConfigurationMode {
    CREATE = "create",
    VIEW = "view",
    EDIT = "edit",
    DUPLICATE = "duplicate"
}
export declare type ConnectorConfiguratorProps = {
    activeStep?: number;
    connector: ConnectorType;
    uiPath: ConfigurationMode;
    configuration?: unknown;
    onChange: (configuration: Map<string, unknown>, isValid: boolean) => void;
    duplicateMode?: boolean | undefined;
};
export declare type ConnectorConfiguratorComponent = ComponentType<ConnectorConfiguratorProps>;
export declare type ConnectorConfiguratorType = ConnectorConfiguratorComponent | false;
export declare type ConnectorConfiguratorResponse = {
    Configurator: ConnectorConfiguratorType;
    steps: string[] | false;
};
declare type Context = {
    connector: ConnectorType;
    Configurator?: ConnectorConfiguratorType;
    steps?: string[] | false;
    error?: string;
    duplicateMode?: boolean | undefined;
};
export declare const configuratorLoaderMachine: import("xstate").StateMachine<Context, any, import("xstate").EventObject, {
    value: any;
    context: Context;
}, import("xstate").ActionObject<Context, import("xstate").EventObject>>;
export {};
