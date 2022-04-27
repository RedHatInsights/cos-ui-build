import { ConnectorConfiguratorProps } from '@app/machines/StepConfiguratorLoader.machine';
import { ComponentType, FunctionComponent } from 'react';
export declare type ConfiguratorStepProps = {
    Configurator: ComponentType<ConnectorConfiguratorProps> | false;
};
export declare const ConfiguratorStep: FunctionComponent;
