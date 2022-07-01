import { ApiCallback } from '@app/machines/PaginatedResponse.machine';
import { Sender } from 'xstate';
import { Connector, ConnectorNamespace, ConnectorType, ServiceAccount } from '@rhoas/connector-management-sdk';
import { KafkaRequest } from '@rhoas/kafka-management-sdk';
import { PlaceholderOrderBy } from './../app/machines/PaginatedResponse.machine';
export declare enum SortOrderValue {
    asc = "asc",
    desc = "desc"
}
export declare type SortOrder = keyof typeof SortOrderValue;
declare type CommonApiProps = {
    accessToken: () => Promise<string>;
    connectorsApiBasePath: string;
};
declare type ConnectorApiProps = {
    connector: Connector;
} & CommonApiProps;
declare type EvalNamespaceApiProps = {
    evalName: string;
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
declare type ConnectorNamespaceProps = {
    namespaceId: string;
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
export declare type ConnectorsOrderBy = {
    name?: SortOrder;
};
export declare type ConnectorsSearch = {
    name?: string;
    description?: string;
    version?: string;
    label?: string[];
    channel?: string;
};
export declare const fetchConnectors: ({ accessToken, connectorsApiBasePath, }: CommonApiProps) => ApiCallback<Connector, ConnectorsOrderBy, ConnectorsSearch>;
export declare const registerEvalNamespace: ({ accessToken, connectorsApiBasePath, evalName, }: EvalNamespaceApiProps) => FetchCallbacks<string>;
export declare const getNamespace: ({ accessToken, connectorsApiBasePath, namespaceId, }: ConnectorNamespaceProps) => FetchCallbacks<ConnectorNamespace>;
export declare type ConnectorNamespaceSearch = {
    name?: string;
};
export declare const fetchConnectorNamespaces: ({ accessToken, connectorsApiBasePath, }: CommonApiProps) => ApiCallback<ConnectorNamespace, PlaceholderOrderBy, ConnectorNamespaceSearch>;
export declare type ConnectorTypesSearch = {
    name?: string;
    categories?: string[];
    description?: string;
    version?: string;
    label?: string[];
    channel?: string;
};
export declare type ConnectorTypesOrderBy = {
    name?: SortOrder;
};
export declare const fetchConnectorTypes: ({ accessToken, connectorsApiBasePath, }: CommonApiProps) => ApiCallback<ConnectorType, PlaceholderOrderBy, ConnectorTypesSearch>;
declare type KafkaManagementApiProps = {
    accessToken: () => Promise<string>;
    kafkaManagementBasePath: string;
};
export declare type KafkasSearch = {
    name?: string;
    owner?: string;
    statuses?: string[];
    cloudProviders?: string[];
    regions?: string[];
};
export declare const fetchKafkaInstances: ({ accessToken, kafkaManagementBasePath, }: KafkaManagementApiProps) => ApiCallback<KafkaRequest, PlaceholderOrderBy, KafkasSearch>;
export declare type UserProvidedServiceAccount = {
    clientId: string;
    clientSecret: string;
};
export declare type createNewServiceAccountProps = {
    accessToken: () => Promise<string>;
    sortDesc: string;
    kafkaManagementApiBasePath: string;
};
export declare const createServiceAccount: ({ accessToken, kafkaManagementApiBasePath, sortDesc, }: createNewServiceAccountProps) => FetchCallbacks<ServiceAccount>;
export declare type SaveConnectorProps = {
    kafka: KafkaRequest;
    namespace: ConnectorNamespace;
    connectorType: ConnectorType;
    configuration: object;
    name: string;
    userServiceAccount: UserProvidedServiceAccount;
    topic?: string;
    userErrorHandler?: string;
} & CommonApiProps;
export declare const saveConnector: ({ accessToken, connectorsApiBasePath, kafka, namespace, connectorType, configuration, name, userServiceAccount, userErrorHandler, topic, }: SaveConnectorProps) => (callback: Sender<any>) => () => void;
export declare const updateConnector: ({ accessToken, connectorsApiBasePath, connectorUpdate, connectorId, updatedName, }: ConnectorEditProps) => FetchCallbacks<undefined>;
export {};
