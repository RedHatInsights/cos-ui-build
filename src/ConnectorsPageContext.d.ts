import { FunctionComponent } from 'react';
import { Connector } from '@rhoas/connector-management-sdk';
import { ConnectorMachineActorRef } from './Connector.machine';
import { usePaginationReturnValue, PaginatedApiRequest } from './PaginatedResponse.machine';
declare type ConnectorsPageProviderPropsType = {
    accessToken: () => Promise<string>;
    connectorsApiBasePath: string;
    onError: (error: string) => void;
};
export declare const ConnectorsPageProvider: FunctionComponent<ConnectorsPageProviderPropsType>;
export declare const useConnectorsPageMachineService: () => import("xstate").Interpreter<{
    accessToken: () => Promise<string>;
    connectorsApiBasePath: string;
    selectedConnector?: Connector | undefined;
    onError?: ((error: string) => void) | undefined;
}, any, import("xstate/lib/model.types").UnionFromCreatorsReturnTypes<import("xstate/lib/model.types").FinalEventCreators<{
    selectConnector: (payload: {
        connector: Connector;
    }) => {
        connector: Connector;
    };
    deselectConnector: () => {};
    'api.refresh': () => {};
    'api.nextPage': () => {};
    'api.prevPage': () => {};
    'api.query': (payload: PaginatedApiRequest<{}>) => PaginatedApiRequest<{}>;
    'api.setResponse': (payload: import("./PaginatedResponse.machine").ApiSuccessResponse<Connector>) => import("./PaginatedResponse.machine").ApiSuccessResponse<Connector>;
    'api.setError': (payload: import("./PaginatedResponse.machine").ApiErrorResponse) => import("./PaginatedResponse.machine").ApiErrorResponse;
    'api.ready': () => {};
    'api.loading': (payload: PaginatedApiRequest<{}>) => PaginatedApiRequest<{}>;
    'api.success': (payload: import("./PaginatedResponse.machine").ApiSuccessResponse<import("xstate").ActorRefWithDeprecatedState<{
        accessToken: () => Promise<string>;
        connectorsApiBasePath: string;
        connector: Connector;
    }, import("xstate/lib/model.types").UnionFromCreatorsReturnTypes<import("xstate/lib/model.types").FinalEventCreators<{
        'connector.start': () => {};
        'connector.stop': () => {};
        'connector.remove': () => {};
        'connector.select': () => {};
        'connector.actionSuccess': (payload: {
            connector: Connector;
        }) => {
            connector: Connector;
        };
        'connector.actionError': (payload: {
            error: string;
        }) => {
            error: string;
        };
    }>>, {
        value: any;
        context: {
            accessToken: () => Promise<string>;
            connectorsApiBasePath: string;
            connector: Connector;
        };
    }>>) => import("./PaginatedResponse.machine").ApiSuccessResponse<import("xstate").ActorRefWithDeprecatedState<{
        accessToken: () => Promise<string>;
        connectorsApiBasePath: string;
        connector: Connector;
    }, import("xstate/lib/model.types").UnionFromCreatorsReturnTypes<import("xstate/lib/model.types").FinalEventCreators<{
        'connector.start': () => {};
        'connector.stop': () => {};
        'connector.remove': () => {};
        'connector.select': () => {};
        'connector.actionSuccess': (payload: {
            connector: Connector;
        }) => {
            connector: Connector;
        };
        'connector.actionError': (payload: {
            error: string;
        }) => {
            error: string;
        };
    }>>, {
        value: any;
        context: {
            accessToken: () => Promise<string>;
            connectorsApiBasePath: string;
            connector: Connector;
        };
    }>>;
    'api.error': (payload: {
        error: string;
    }) => {
        error: string;
    };
}>>, {
    value: any;
    context: {
        accessToken: () => Promise<string>;
        connectorsApiBasePath: string;
        selectedConnector?: Connector | undefined;
        onError?: ((error: string) => void) | undefined;
    };
}>;
export declare const useConnectorsPageIsReady: () => boolean;
declare type useConnectorsMachineReturnType = usePaginationReturnValue<{}, ConnectorMachineActorRef> & {
    selectedConnector: Connector | undefined;
    deselectConnector: () => void;
    query: (props: PaginatedApiRequest<{}>) => void;
};
export declare const useConnectorsMachine: () => useConnectorsMachineReturnType;
export {};
