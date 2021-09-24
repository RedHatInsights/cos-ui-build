import { FunctionComponent } from 'react';
import { ActorRef } from 'xstate';
import { ConnectorCluster, ConnectorType } from '@rhoas/connector-management-sdk';
import { KafkaRequest } from '@rhoas/kafka-management-sdk';
import { PaginatedApiRequest } from './PaginatedResponse.machine';
import { ClustersMachineActorRef } from './StepClusters.machine';
import { ConnectorConfiguratorResponse } from './StepConfiguratorLoader.machine';
import { ConnectorTypesMachineActorRef } from './StepConnectorTypes.machine';
import { KafkaMachineActorRef } from './StepKafkas.machine';
import { ReviewMachineActorRef } from './StepReview.machine';
import { ConnectorTypesQuery, KafkasQuery, UserProvidedServiceAccount } from './api';
export declare type EmittedFrom<T> = T extends ActorRef<any, infer TEmitted> ? TEmitted : never;
declare type CreateConnectorWizardProviderProps = {
    accessToken: () => Promise<string>;
    basePath: string;
    fetchConfigurator: (connector: ConnectorType) => Promise<ConnectorConfiguratorResponse>;
    onSave: () => void;
};
export declare const CreateConnectorWizardProvider: FunctionComponent<CreateConnectorWizardProviderProps>;
export declare const useCreateConnectorWizardService: () => import("xstate").Interpreter<{
    accessToken: () => Promise<string>;
    basePath: string;
    selectedKafkaInstance?: KafkaRequest | undefined;
    selectedCluster?: ConnectorCluster | undefined;
    selectedConnector?: ConnectorType | undefined;
    Configurator?: import("./StepConfiguratorLoader.machine").ConnectorConfiguratorType | undefined;
    configurationSteps?: false | string[] | undefined;
    activeConfigurationStep?: number | undefined;
    isConfigurationValid?: boolean | undefined;
    connectorConfiguration?: unknown;
    onSave?: (() => void) | undefined;
}, any, import("xstate/lib/model.types").UnionFromCreatorsReturnTypes<import("xstate/lib/model.types").FinalEventCreators<{
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
    context: {
        accessToken: () => Promise<string>;
        basePath: string;
        selectedKafkaInstance?: KafkaRequest | undefined;
        selectedCluster?: ConnectorCluster | undefined;
        selectedConnector?: ConnectorType | undefined;
        Configurator?: import("./StepConfiguratorLoader.machine").ConnectorConfiguratorType | undefined;
        configurationSteps?: false | string[] | undefined;
        activeConfigurationStep?: number | undefined;
        isConfigurationValid?: boolean | undefined;
        connectorConfiguration?: unknown;
        onSave?: (() => void) | undefined;
    };
}>;
export declare const useCreateConnectorWizard: () => {
    connectorTypeRef: ConnectorTypesMachineActorRef;
    kafkaRef: KafkaMachineActorRef;
    clusterRef: ClustersMachineActorRef;
    reviewRef: ReviewMachineActorRef;
};
export declare const useClustersMachineIsReady: () => boolean;
export declare const useClustersMachine: () => {
    selectedId: string | undefined;
    onSelect: (selectedCluster: string) => void;
    onQuery: (request: PaginatedApiRequest<{}>) => void;
    request: PaginatedApiRequest<{}>;
    response?: import("./PaginatedResponse.machine").PaginatedApiResponse<ConnectorCluster> | undefined;
    loading: boolean;
    queryEmpty: boolean;
    queryResults: boolean;
    noResults: boolean;
    results: boolean;
    error: boolean;
    firstRequest: boolean;
};
export declare const useConnectorTypesMachineIsReady: () => boolean;
export declare const useConnectorTypesMachine: () => {
    selectedId: string | undefined;
    onSelect: (selectedConnector: string) => void;
    onQuery: (request: PaginatedApiRequest<ConnectorTypesQuery>) => void;
    request: PaginatedApiRequest<ConnectorTypesQuery>;
    response?: import("./PaginatedResponse.machine").PaginatedApiResponse<ConnectorType> | undefined;
    loading: boolean;
    queryEmpty: boolean;
    queryResults: boolean;
    noResults: boolean;
    results: boolean;
    error: boolean;
    firstRequest: boolean;
};
export declare const useKafkasMachineIsReady: () => boolean;
export declare const useKafkasMachine: () => {
    selectedId: string | undefined;
    onSelect: (selectedInstance: string) => void;
    onQuery: (request: PaginatedApiRequest<KafkasQuery>) => void;
    request: PaginatedApiRequest<KafkasQuery>;
    response?: import("./PaginatedResponse.machine").PaginatedApiResponse<KafkaRequest> | undefined;
    loading: boolean;
    queryEmpty: boolean;
    queryResults: boolean;
    noResults: boolean;
    results: boolean;
    error: boolean;
    firstRequest: boolean;
};
export declare const useReviewMachine: () => {
    name: string;
    serviceAccount: UserProvidedServiceAccount | undefined;
    configString: string;
    configStringError: string | undefined;
    configStringWarnings: string[] | undefined;
    isSaving: boolean;
    savingError: string | undefined;
    onSetName: (name: string) => void;
    onSetServiceAccount: (serviceAccount: UserProvidedServiceAccount | undefined) => void;
    onUpdateConfiguration: (data?: string | undefined) => void;
};
export {};
