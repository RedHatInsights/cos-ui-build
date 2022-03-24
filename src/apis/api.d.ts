import { ApiCallback } from '@app/machines/PaginatedResponse.machine';
import { Sender } from 'xstate';
import { Connector, ConnectorCluster, ConnectorType } from '@rhoas/connector-management-sdk';
import { KafkaRequest } from '@rhoas/kafka-management-sdk';
declare type CommonApiProps = {
    accessToken: () => Promise<string>;
    connectorsApiBasePath: string;
};
declare type ConnectorApiProps = {
    connector: Connector;
} & CommonApiProps;
declare type ConnectorEditProps = {
    connectorUpdate: {
        [key: string]: any;
    };
    connectorId: string;
    updatedName?: string;
} & CommonApiProps;
declare type ConnectorDetailProps = {
    connectorId: string;
} & CommonApiProps;
declare type ConnectorTypeProps = {
    connectorTypeId: string;
} & CommonApiProps;
export declare type FetchCallbacks<RawDataType> = (onSuccess: (payload?: RawDataType) => void, onError: (errorMsg: string) => void) => () => void;
export declare const startConnector: ({ accessToken, connectorsApiBasePath, connector, }: ConnectorApiProps) => (callback: Sender<any>) => () => void;
export declare const stopConnector: ({ accessToken, connectorsApiBasePath, connector, }: ConnectorApiProps) => (callback: Sender<any>) => () => void;
export declare const deleteConnector: ({ accessToken, connectorsApiBasePath, connector, }: ConnectorApiProps) => (callback: Sender<any>) => () => void;
export declare const getConnector: ({ accessToken, connectorsApiBasePath, connectorId, }: ConnectorDetailProps) => FetchCallbacks<Connector>;
export declare const getConnectorTypeDetail: ({ accessToken, connectorsApiBasePath, connectorTypeId, }: ConnectorTypeProps) => (callback: any) => () => void;
export declare const fetchConnectors: ({ accessToken, connectorsApiBasePath, }: CommonApiProps) => ApiCallback<Connector, {}>;
export declare const fetchClusters: ({ accessToken, connectorsApiBasePath, }: CommonApiProps) => ApiCallback<ConnectorCluster, {}>;
export declare type ConnectorTypesQuery = {
    name?: string;
    categories?: string[];
};
export declare const fetchConnectorTypes: ({ accessToken, connectorsApiBasePath, }: CommonApiProps) => ApiCallback<ConnectorType, ConnectorTypesQuery>;
declare type KafkaManagementApiProps = {
    accessToken: () => Promise<string>;
    kafkaManagementBasePath: string;
};
export declare type KafkasQuery = {
    name?: string;
    owner?: string;
    statuses?: string[];
    cloudProviders?: string[];
    regions?: string[];
};
export declare const fetchKafkaInstances: ({ accessToken, kafkaManagementBasePath, }: KafkaManagementApiProps) => ApiCallback<KafkaRequest, KafkasQuery>;
export declare type UserProvidedServiceAccount = {
    clientId: string;
    clientSecret: string;
};
export declare type createNewServiceAccountProps = {
    accessToken: () => Promise<string>;
    sortDesc: string;
    kafkaManagementApiBasePath: string;
};
export declare const createNewServiceAccount: ({ accessToken, kafkaManagementApiBasePath, sortDesc, }: createNewServiceAccountProps) => Promise<{
    clientId: string;
    clientSecret: string;
}>;
export declare type SaveConnectorProps = {
    kafka: KafkaRequest;
    cluster: ConnectorCluster;
    connectorType: ConnectorType;
    configuration: object;
    name: string;
    userServiceAccount: UserProvidedServiceAccount;
    topic?: string;
    userErrorHandler?: string;
} & CommonApiProps;
export declare const saveConnector: ({ accessToken, connectorsApiBasePath, kafka, cluster, connectorType, configuration, name, userServiceAccount, userErrorHandler, topic, }: SaveConnectorProps) => (callback: Sender<any>) => () => void;
export declare const updateConnector: ({ accessToken, connectorsApiBasePath, connectorUpdate, connectorId, updatedName, }: ConnectorEditProps) => FetchCallbacks<undefined>;
export {};
