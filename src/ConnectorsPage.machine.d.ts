import { InterpreterFrom } from 'xstate';
import { Connector } from '@rhoas/connector-management-sdk';
declare type Context = {
    accessToken: () => Promise<string>;
    connectorsApiBasePath: string;
    selectedConnector?: Connector;
    onError?: (error: string) => void;
};
export declare const connectorsPageMachine: import("xstate").StateMachine<Context, any, import("xstate/lib/model.types").UnionFromCreatorsReturnTypes<import("xstate/lib/model.types").FinalEventCreators<{
    selectConnector: (payload: {
        connector: Connector;
    }) => {
        connector: Connector;
    };
    deselectConnector: () => {};
    'api.refresh': () => {};
    'api.nextPage': () => {};
    'api.prevPage': () => {};
    'api.query': (payload: import("./PaginatedResponse.machine").PaginatedApiRequest<{}>) => import("./PaginatedResponse.machine").PaginatedApiRequest<{}>;
    'api.setResponse': (payload: import("./PaginatedResponse.machine").ApiSuccessResponse<Connector>) => import("./PaginatedResponse.machine").ApiSuccessResponse<Connector>;
    'api.setError': (payload: import("./PaginatedResponse.machine").ApiErrorResponse) => import("./PaginatedResponse.machine").ApiErrorResponse;
    'api.ready': () => {};
    'api.loading': (payload: import("./PaginatedResponse.machine").PaginatedApiRequest<{}>) => import("./PaginatedResponse.machine").PaginatedApiRequest<{}>;
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
    context: Context;
}, import("xstate").ActionObject<Context, import("xstate/lib/model.types").UnionFromCreatorsReturnTypes<import("xstate/lib/model.types").FinalEventCreators<{
    selectConnector: (payload: {
        connector: Connector;
    }) => {
        connector: Connector;
    };
    deselectConnector: () => {};
    'api.refresh': () => {};
    'api.nextPage': () => {};
    'api.prevPage': () => {};
    'api.query': (payload: import("./PaginatedResponse.machine").PaginatedApiRequest<{}>) => import("./PaginatedResponse.machine").PaginatedApiRequest<{}>;
    'api.setResponse': (payload: import("./PaginatedResponse.machine").ApiSuccessResponse<Connector>) => import("./PaginatedResponse.machine").ApiSuccessResponse<Connector>;
    'api.setError': (payload: import("./PaginatedResponse.machine").ApiErrorResponse) => import("./PaginatedResponse.machine").ApiErrorResponse;
    'api.ready': () => {};
    'api.loading': (payload: import("./PaginatedResponse.machine").PaginatedApiRequest<{}>) => import("./PaginatedResponse.machine").PaginatedApiRequest<{}>;
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
}>>>>;
export declare type ConnectorsMachineInterpretType = InterpreterFrom<typeof connectorsPageMachine>;
export {};
