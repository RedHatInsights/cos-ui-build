import { ComponentType, FunctionComponent } from 'react';
import { ConnectorConfiguratorProps } from './StepConfiguratorLoader.machine';
export declare type ConfiguratorStepProps = {
    Configurator: ComponentType<ConnectorConfiguratorProps> | false;
};
export declare const ConfiguratorStep: FunctionComponent;
