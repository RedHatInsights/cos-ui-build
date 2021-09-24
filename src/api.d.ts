import { Sender } from 'xstate';
import { Connector, ConnectorCluster, ConnectorType } from '@rhoas/connector-management-sdk';
import { KafkaRequest } from '@rhoas/kafka-management-sdk';
import { ApiCallback } from './PaginatedResponse.machine';
declare type CommonApiProps = {
    accessToken: () => Promise<string>;
    basePath: string;
};
declare type ConnectorApiProps = {
    connector: Connector;
} & CommonApiProps;
export declare const startConnector: ({ accessToken, basePath, connector, }: ConnectorApiProps) => (callback: Sender<any>) => () => void;
export declare const stopConnector: ({ accessToken, basePath, connector, }: ConnectorApiProps) => (callback: Sender<any>) => () => void;
export declare const deleteConnector: ({ accessToken, basePath, connector, }: ConnectorApiProps) => (callback: Sender<any>) => () => void;
export declare const fetchConnectors: ({ accessToken, basePath, }: CommonApiProps) => ApiCallback<Connector, {}>;
export declare const fetchClusters: ({ accessToken, basePath, }: CommonApiProps) => ApiCallback<ConnectorCluster, {}>;
export declare type ConnectorTypesQuery = {
    name?: string;
    categories?: string[];
};
export declare const fetchConnectorTypes: ({ accessToken, basePath, }: CommonApiProps) => ApiCallback<ConnectorType, ConnectorTypesQuery>;
export declare type KafkasQuery = {
    name?: string;
    owner?: string;
    statuses?: string[];
    cloudProviders?: string[];
    regions?: string[];
};
export declare const fetchKafkaInstances: ({ accessToken, basePath, }: CommonApiProps) => ApiCallback<KafkaRequest, KafkasQuery>;
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
} & CommonApiProps;
export declare const saveConnector: ({ accessToken, basePath, kafka, cluster, connectorType, configuration, name, userServiceAccount, }: SaveConnectorProps) => (callback: Sender<any>) => () => void;
export {};
