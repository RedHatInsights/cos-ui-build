import { ActorRefFrom } from 'xstate';
import { ConnectorType } from '@rhoas/connector-management-sdk';
import { ApiSuccessResponse } from './PaginatedResponse.machine';
import { ConnectorTypesQuery } from './api';
declare type Context = {
    accessToken: () => Promise<string>;
    basePath: string;
    response?: ApiSuccessResponse<ConnectorType>;
    selectedConnector?: ConnectorType;
    error?: Object;
};
export declare const connectorTypesMachine: import("xstate").StateMachine<Context, any, import("xstate/lib/model.types").UnionFromCreatorsReturnTypes<import("xstate/lib/model.types").FinalEventCreators<{
    'api.refresh': () => {};
    'api.nextPage': () => {};
    'api.prevPage': () => {};
    'api.query': (payload: import("./PaginatedResponse.machine").PaginatedApiRequest<ConnectorTypesQuery>) => import("./PaginatedResponse.machine").PaginatedApiRequest<ConnectorTypesQuery>;
    'api.setResponse': (payload: ApiSuccessResponse<ConnectorType>) => ApiSuccessResponse<ConnectorType>;
    'api.setError': (payload: import("./PaginatedResponse.machine").ApiErrorResponse) => import("./PaginatedResponse.machine").ApiErrorResponse;
    'api.ready': () => {};
    'api.loading': (payload: import("./PaginatedResponse.machine").PaginatedApiRequest<ConnectorTypesQuery>) => import("./PaginatedResponse.machine").PaginatedApiRequest<ConnectorTypesQuery>;
    'api.success': (payload: ApiSuccessResponse<ConnectorType>) => ApiSuccessResponse<ConnectorType>;
    'api.error': (payload: {
        error: string;
    }) => {
        error: string;
    };
    selectConnector: (payload: {
        selectedConnector: string;
    }) => {
        selectedConnector: string;
    };
    deselectConnector: () => {};
    confirm: () => {};
}>>, {
    value: any;
    context: Context;
}, import("xstate").ActionObject<Context, import("xstate/lib/model.types").UnionFromCreatorsReturnTypes<import("xstate/lib/model.types").FinalEventCreators<{
    'api.refresh': () => {};
    'api.nextPage': () => {};
    'api.prevPage': () => {};
    'api.query': (payload: import("./PaginatedResponse.machine").PaginatedApiRequest<ConnectorTypesQuery>) => import("./PaginatedResponse.machine").PaginatedApiRequest<ConnectorTypesQuery>;
    'api.setResponse': (payload: ApiSuccessResponse<ConnectorType>) => ApiSuccessResponse<ConnectorType>;
    'api.setError': (payload: import("./PaginatedResponse.machine").ApiErrorResponse) => import("./PaginatedResponse.machine").ApiErrorResponse;
    'api.ready': () => {};
    'api.loading': (payload: import("./PaginatedResponse.machine").PaginatedApiRequest<ConnectorTypesQuery>) => import("./PaginatedResponse.machine").PaginatedApiRequest<ConnectorTypesQuery>;
    'api.success': (payload: ApiSuccessResponse<ConnectorType>) => ApiSuccessResponse<ConnectorType>;
    'api.error': (payload: {
        error: string;
    }) => {
        error: string;
    };
    selectConnector: (payload: {
        selectedConnector: string;
    }) => {
        selectedConnector: string;
    };
    deselectConnector: () => {};
    confirm: () => {};
}>>>>;
export declare type ConnectorTypesMachineActorRef = ActorRefFrom<typeof connectorTypesMachine>;
export {};
