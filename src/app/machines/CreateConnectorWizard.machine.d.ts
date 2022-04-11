import { UserProvidedServiceAccount } from '@apis/api';
import { ConnectorConfiguratorType } from '@app/machines/StepConfiguratorLoader.machine';
import { InterpreterFrom } from 'xstate';
import { Connector, ConnectorNamespace, ConnectorType } from '@rhoas/connector-management-sdk';
import { KafkaRequest } from '@rhoas/kafka-management-sdk';
declare type Context = {
    accessToken: () => Promise<string>;
    connectorsApiBasePath: string;
    kafkaManagementApiBasePath: string;
    selectedKafkaInstance?: KafkaRequest;
    selectedNamespace?: ConnectorNamespace;
    selectedConnector?: ConnectorType;
    Configurator?: ConnectorConfiguratorType;
    configurationSteps?: string[] | false;
    activeConfigurationStep?: number;
    isConfigurationValid?: boolean;
    connectorConfiguration?: unknown;
    name: string;
    sACreated: boolean;
    topic: string;
    userServiceAccount: UserProvidedServiceAccount;
    userErrorHandler: string;
    onSave?: (name: string) => void;
    connectorData?: Connector;
    connectorTypeDetails?: ConnectorType;
    connectorId?: string;
    duplicateMode?: boolean;
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
    jumpToSelectNamespace: () => {};
    jumpToSelectConnector: () => {};
    jumpToConfigureConnector: ({ subStep }: {
        subStep?: number | undefined;
    }) => {
        subStep: number | undefined;
    };
    jumpToBasicConfiguration: () => {};
    jumpToErrorConfiguration: () => {};
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
    jumpToSelectNamespace: () => {};
    jumpToSelectConnector: () => {};
    jumpToConfigureConnector: ({ subStep }: {
        subStep?: number | undefined;
    }) => {
        subStep: number | undefined;
    };
    jumpToBasicConfiguration: () => {};
    jumpToErrorConfiguration: () => {};
    jumpToReviewConfiguration: () => {};
}>>>>;
export declare type CreationWizardMachineInterpreterFromType = InterpreterFrom<typeof creationWizardMachine>;
export {};
