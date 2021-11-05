import { ComponentType, LazyExoticComponent } from 'react';
import { ConnectorType } from '@rhoas/connector-management-sdk';
import { ConnectorConfiguratorResponse } from './StepConfiguratorLoader.machine';
export declare type FederatedConfiguratorConfig = {
    steps: string[];
    Configurator: LazyExoticComponent<ComponentType<any>>;
};
export declare const fetchConfigurator: (connector: ConnectorType, config: Record<string, unknown>) => Promise<ConnectorConfiguratorResponse>;
export declare const injectFederatedModuleScript: (url: string) => Promise<void>;
export declare function loadFederatedConfigurator(scope: string, module: string): Promise<FederatedConfiguratorConfig>;
