import { ConnectorTypesQuery, KafkasQuery, UserProvidedServiceAccount } from '@apis/api';
import { PaginatedApiRequest } from '@app/machines/PaginatedResponse.machine';
import { ClustersMachineActorRef } from '@app/machines/StepClusters.machine';
import { BasicMachineActorRef } from '@app/machines/StepCommon.machine';
import { ConnectorConfiguratorResponse } from '@app/machines/StepConfiguratorLoader.machine';
import { ConnectorTypesMachineActorRef } from '@app/machines/StepConnectorTypes.machine';
import { ErrorHandlingMachineActorRef } from '@app/machines/StepErrorHandling.machine';
import { KafkaMachineActorRef } from '@app/machines/StepKafkas.machine';
import { ReviewMachineActorRef } from '@app/machines/StepReview.machine';
import { FunctionComponent } from 'react';
import { ActorRef } from 'xstate';
import { ConnectorCluster, ConnectorType } from '@rhoas/connector-management-sdk';
import { KafkaRequest } from '@rhoas/kafka-management-sdk';
export declare type EmittedFrom<T> = T extends ActorRef<any, infer TEmitted> ? TEmitted : never;
declare type CreateConnectorWizardProviderProps = {
    accessToken: () => Promise<string>;
    connectorsApiBasePath: string;
    fetchConfigurator: (connector: ConnectorType) => Promise<ConnectorConfiguratorResponse>;
    onSave: () => void;
};
export declare const CreateConnectorWizardProvider: FunctionComponent<CreateConnectorWizardProviderProps>;
export declare const useCreateConnectorWizardService: () => import("xstate").Interpreter<{
    accessToken: () => Promise<string>;
    connectorsApiBasePath: string;
    kafkaManagementApiBasePath: string;
    selectedKafkaInstance?: KafkaRequest | undefined;
    selectedCluster?: ConnectorCluster | undefined;
    selectedConnector?: ConnectorType | undefined;
    Configurator?: import("@app/machines/StepConfiguratorLoader.machine").ConnectorConfiguratorType | undefined;
    configurationSteps?: false | string[] | undefined;
    activeConfigurationStep?: number | undefined;
    isConfigurationValid?: boolean | undefined;
    connectorConfiguration?: unknown;
    name: string;
    sACreated: boolean;
    topic: string;
    userServiceAccount: UserProvidedServiceAccount;
    userErrorHandler: string;
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
    jumpToBasicConfiguration: () => {};
    jumpToErrorConfiguration: () => {};
    jumpToReviewConfiguration: () => {};
}>>, {
    value: any;
    context: {
        accessToken: () => Promise<string>;
        connectorsApiBasePath: string;
        kafkaManagementApiBasePath: string;
        selectedKafkaInstance?: KafkaRequest | undefined;
        selectedCluster?: ConnectorCluster | undefined;
        selectedConnector?: ConnectorType | undefined;
        Configurator?: import("@app/machines/StepConfiguratorLoader.machine").ConnectorConfiguratorType | undefined;
        configurationSteps?: false | string[] | undefined;
        activeConfigurationStep?: number | undefined;
        isConfigurationValid?: boolean | undefined;
        connectorConfiguration?: unknown;
        name: string;
        sACreated: boolean;
        topic: string;
        userServiceAccount: UserProvidedServiceAccount;
        userErrorHandler: string;
        onSave?: (() => void) | undefined;
    };
}>;
export declare const useCreateConnectorWizard: () => {
    connectorTypeRef: ConnectorTypesMachineActorRef;
    kafkaRef: KafkaMachineActorRef;
    clusterRef: ClustersMachineActorRef;
    basicRef: BasicMachineActorRef;
    errorRef: ErrorHandlingMachineActorRef;
    reviewRef: ReviewMachineActorRef;
};
export declare const useClustersMachineIsReady: () => boolean;
export declare const useClustersMachine: () => {
    selectedId: string | undefined;
    onSelect: (selectedCluster: string) => void;
    onQuery: (request: PaginatedApiRequest<{}>) => void;
    request: PaginatedApiRequest<{}>;
    response?: import("@app/machines/PaginatedResponse.machine").PaginatedApiResponse<ConnectorCluster> | undefined;
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
    response?: import("@app/machines/PaginatedResponse.machine").PaginatedApiResponse<ConnectorType> | undefined;
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
    response?: import("@app/machines/PaginatedResponse.machine").PaginatedApiResponse<KafkaRequest> | undefined;
    loading: boolean;
    queryEmpty: boolean;
    queryResults: boolean;
    noResults: boolean;
    results: boolean;
    error: boolean;
    firstRequest: boolean;
};
export declare const useBasicMachine: () => {
    serviceAccount: UserProvidedServiceAccount;
    name: string;
    sACreated: boolean;
    onSetSaCreated: (sACreated: boolean) => void;
    onSetName: (name: string) => void;
    onSetServiceAccount: (serviceAccount: UserProvidedServiceAccount) => void;
};
export declare const useReviewMachine: () => {
    kafka: KafkaRequest;
    cluster: ConnectorCluster;
    connectorType: ConnectorType;
    topic: string;
    userErrorHandler: string;
    name: string;
    userServiceAccount: UserProvidedServiceAccount;
    configString: string;
    isSaving: boolean;
    savingError: string | undefined;
};
export declare const useErrorHandlingMachine: () => {
    errorHandler: any;
    topic: string;
    onSetErrorHandler: (errorHandler: string) => void;
    onSetTopic: (topic: string) => void;
    connector: ConnectorType;
};
export {};
