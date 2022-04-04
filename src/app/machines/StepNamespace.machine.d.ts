import { ActorRefFrom } from 'xstate';
import { ConnectorNamespace } from '@rhoas/connector-management-sdk';
import { ApiSuccessResponse } from './PaginatedResponse.machine';
declare type Context = {
    accessToken: () => Promise<string>;
    connectorsApiBasePath: string;
    response?: ApiSuccessResponse<ConnectorNamespace>;
    selectedNamespace?: ConnectorNamespace;
    error?: Object;
};
export declare const namespacesMachine: import("xstate").StateMachine<Context, any, import("xstate/lib/model.types").UnionFromCreatorsReturnTypes<import("xstate/lib/model.types").FinalEventCreators<{
    'api.refresh': () => {};
    'api.nextPage': () => {};
    'api.prevPage': () => {};
    'api.query': (payload: import("./PaginatedResponse.machine").PaginatedApiRequest<{}>) => import("./PaginatedResponse.machine").PaginatedApiRequest<{}>;
    'api.setResponse': (payload: ApiSuccessResponse<ConnectorNamespace>) => ApiSuccessResponse<ConnectorNamespace>;
    'api.setError': (payload: import("./PaginatedResponse.machine").ApiErrorResponse) => import("./PaginatedResponse.machine").ApiErrorResponse;
    'api.ready': () => {};
    'api.loading': (payload: import("./PaginatedResponse.machine").PaginatedApiRequest<{}>) => import("./PaginatedResponse.machine").PaginatedApiRequest<{}>;
    'api.success': (payload: ApiSuccessResponse<ConnectorNamespace>) => ApiSuccessResponse<ConnectorNamespace>;
    'api.error': (payload: {
        error: string;
    }) => {
        error: string;
    };
    selectNamespace: (payload: {
        selectedNamespace: string;
    }) => {
        selectedNamespace: string;
    };
    deselectNamespace: () => {};
    confirm: () => {};
}>>, {
    value: any;
    context: Context;
}, import("xstate").ActionObject<Context, import("xstate/lib/model.types").UnionFromCreatorsReturnTypes<import("xstate/lib/model.types").FinalEventCreators<{
    'api.refresh': () => {};
    'api.nextPage': () => {};
    'api.prevPage': () => {};
    'api.query': (payload: import("./PaginatedResponse.machine").PaginatedApiRequest<{}>) => import("./PaginatedResponse.machine").PaginatedApiRequest<{}>;
    'api.setResponse': (payload: ApiSuccessResponse<ConnectorNamespace>) => ApiSuccessResponse<ConnectorNamespace>;
    'api.setError': (payload: import("./PaginatedResponse.machine").ApiErrorResponse) => import("./PaginatedResponse.machine").ApiErrorResponse;
    'api.ready': () => {};
    'api.loading': (payload: import("./PaginatedResponse.machine").PaginatedApiRequest<{}>) => import("./PaginatedResponse.machine").PaginatedApiRequest<{}>;
    'api.success': (payload: ApiSuccessResponse<ConnectorNamespace>) => ApiSuccessResponse<ConnectorNamespace>;
    'api.error': (payload: {
        error: string;
    }) => {
        error: string;
    };
    selectNamespace: (payload: {
        selectedNamespace: string;
    }) => {
        selectedNamespace: string;
    };
    deselectNamespace: () => {};
    confirm: () => {};
}>>>>;
export declare type NamespaceMachineActorRef = ActorRefFrom<typeof namespacesMachine>;
export {};
