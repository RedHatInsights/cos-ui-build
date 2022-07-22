import { ConnectorsOrderBy, ConnectorsSearch } from '@apis/api';
import { ConnectorMachineActorRef } from '@app/machines/Connector.machine';
import { usePaginationReturnValue, PaginatedApiRequest } from '@app/machines/PaginatedResponse.machine';
import { FunctionComponent } from 'react';
import { Connector } from '@rhoas/connector-management-sdk';
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
    'api.query': (payload: PaginatedApiRequest<ConnectorsOrderBy, ConnectorsSearch>) => PaginatedApiRequest<ConnectorsOrderBy, ConnectorsSearch>;
    'api.setResponse': (payload: import("@app/machines/PaginatedResponse.machine").ApiSuccessResponse<Connector>) => import("@app/machines/PaginatedResponse.machine").ApiSuccessResponse<Connector>;
    'api.setError': (payload: import("@app/machines/PaginatedResponse.machine").ApiErrorResponse) => import("@app/machines/PaginatedResponse.machine").ApiErrorResponse;
    'api.ready': () => {};
    'api.loading': (payload: PaginatedApiRequest<ConnectorsOrderBy, ConnectorsSearch>) => PaginatedApiRequest<ConnectorsOrderBy, ConnectorsSearch>;
    'api.success': (payload: import("@app/machines/PaginatedResponse.machine").ApiSuccessResponse<import("xstate").ActorRefWithDeprecatedState<{
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
    }>>) => import("@app/machines/PaginatedResponse.machine").ApiSuccessResponse<import("xstate").ActorRefWithDeprecatedState<{
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
declare type useConnectorsMachineReturnType = usePaginationReturnValue<ConnectorsOrderBy, ConnectorsSearch, ConnectorMachineActorRef> & {
    selectedConnector: Connector | undefined;
    deselectConnector: () => void;
    runQuery: (props: PaginatedApiRequest<ConnectorsOrderBy, ConnectorsSearch>) => void;
};
export declare const useConnectorsMachine: () => useConnectorsMachineReturnType;
export {};
