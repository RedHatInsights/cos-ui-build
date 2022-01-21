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
export declare const startConnector: ({ accessToken, connectorsApiBasePath, connector, }: ConnectorApiProps) => (callback: Sender<any>) => () => void;
export declare const stopConnector: ({ accessToken, connectorsApiBasePath, connector, }: ConnectorApiProps) => (callback: Sender<any>) => () => void;
export declare const deleteConnector: ({ accessToken, connectorsApiBasePath, connector, }: ConnectorApiProps) => (callback: Sender<any>) => () => void;
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
export declare type SaveConnectorProps = {
    kafka: KafkaRequest;
    cluster: ConnectorCluster;
    connectorType: ConnectorType;
    configuration: object;
    name: string;
    userServiceAccount?: UserProvidedServiceAccount;
    kafkaManagementApiBasePath: string;
} & CommonApiProps;
export declare const saveConnector: ({ accessToken, connectorsApiBasePath, kafkaManagementApiBasePath, kafka, cluster, connectorType, configuration, name, userServiceAccount, }: SaveConnectorProps) => (callback: Sender<any>) => () => void;
export {};
