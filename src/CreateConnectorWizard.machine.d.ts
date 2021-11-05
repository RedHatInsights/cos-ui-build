import { InterpreterFrom } from 'xstate';
import { ConnectorCluster, ConnectorType } from '@rhoas/connector-management-sdk';
import { KafkaRequest } from '@rhoas/kafka-management-sdk';
import { ConnectorConfiguratorType } from './StepConfiguratorLoader.machine';
declare type Context = {
    accessToken: () => Promise<string>;
    connectorsApiBasePath: string;
    kafkaManagementApiBasePath: string;
    selectedKafkaInstance?: KafkaRequest;
    selectedCluster?: ConnectorCluster;
    selectedConnector?: ConnectorType;
    Configurator?: ConnectorConfiguratorType;
    configurationSteps?: string[] | false;
    activeConfigurationStep?: number;
    isConfigurationValid?: boolean;
    connectorConfiguration?: unknown;
    onSave?: () => void;
};
export declare const creationWizardMachine: import("xstate").StateMachine<Context, any, import("xstate/lib/model.types").UnionFromCreatorsReturnTypes<import("xstate/lib/model.types").FinalEventCreators<{
    isValid: () => {};
    isInvalid: () => {};
    prev: () => {};
    next: () => {};
    changedStep: ({ step }: {
        step: number;
    }) => {
        step: number;
    };
    jumpToSelectKafka: () => {};
    jumpToSelectCluster: () => {};
    jumpToSelectConnector: () => {};
    jumpToConfigureConnector: ({ subStep }: {
        subStep?: number | undefined;
    }) => {
        subStep: number | undefined;
    };
    jumpToReviewConfiguration: () => {};
}>>, {
    value: any;
    context: Context;
}, import("xstate").ActionObject<Context, import("xstate/lib/model.types").UnionFromCreatorsReturnTypes<import("xstate/lib/model.types").FinalEventCreators<{
    isValid: () => {};
    isInvalid: () => {};
    prev: () => {};
    next: () => {};
    changedStep: ({ step }: {
        step: number;
    }) => {
        step: number;
    };
    jumpToSelectKafka: () => {};
    jumpToSelectCluster: () => {};
    jumpToSelectConnector: () => {};
    jumpToConfigureConnector: ({ subStep }: {
        subStep?: number | undefined;
    }) => {
        subStep: number | undefined;
    };
    jumpToReviewConfiguration: () => {};
}>>>>;
export declare type CreationWizardMachineInterpreterFromType = InterpreterFrom<typeof creationWizardMachine>;
export {};
