import { ActorRefFrom } from 'xstate';
import { ConnectorCluster } from '@rhoas/connector-management-sdk';
import { KafkaRequest } from '@rhoas/kafka-management-sdk';
import { ApiSuccessResponse } from './PaginatedResponse.machine';
declare type Context = {
    accessToken: () => Promise<string>;
    basePath: string;
    response?: ApiSuccessResponse<ConnectorCluster>;
    selectedCluster?: ConnectorCluster;
    error?: Object;
};
export declare const clustersMachine: import("xstate").StateMachine<Context, any, import("xstate/lib/model.types").UnionFromCreatorsReturnTypes<import("xstate/lib/model.types").FinalEventCreators<{
    'api.refresh': () => {};
    'api.nextPage': () => {};
    'api.prevPage': () => {};
    'api.query': (payload: import("./PaginatedResponse.machine").PaginatedApiRequest<{}>) => import("./PaginatedResponse.machine").PaginatedApiRequest<{}>;
    'api.setResponse': (payload: ApiSuccessResponse<KafkaRequest>) => ApiSuccessResponse<KafkaRequest>;
    'api.setError': (payload: import("./PaginatedResponse.machine").ApiErrorResponse) => import("./PaginatedResponse.machine").ApiErrorResponse;
    'api.ready': () => {};
    'api.loading': (payload: import("./PaginatedResponse.machine").PaginatedApiRequest<{}>) => import("./PaginatedResponse.machine").PaginatedApiRequest<{}>;
    'api.success': (payload: ApiSuccessResponse<KafkaRequest>) => ApiSuccessResponse<KafkaRequest>;
    'api.error': (payload: {
        error: string;
    }) => {
        error: string;
    };
    selectCluster: (payload: {
        selectedCluster: string;
    }) => {
        selectedCluster: string;
    };
    deselectCluster: () => {};
    confirm: () => {};
}>>, {
    value: any;
    context: Context;
}, import("xstate").ActionObject<Context, import("xstate/lib/model.types").UnionFromCreatorsReturnTypes<import("xstate/lib/model.types").FinalEventCreators<{
    'api.refresh': () => {};
    'api.nextPage': () => {};
    'api.prevPage': () => {};
    'api.query': (payload: import("./PaginatedResponse.machine").PaginatedApiRequest<{}>) => import("./PaginatedResponse.machine").PaginatedApiRequest<{}>;
    'api.setResponse': (payload: ApiSuccessResponse<KafkaRequest>) => ApiSuccessResponse<KafkaRequest>;
    'api.setError': (payload: import("./PaginatedResponse.machine").ApiErrorResponse) => import("./PaginatedResponse.machine").ApiErrorResponse;
    'api.ready': () => {};
    'api.loading': (payload: import("./PaginatedResponse.machine").PaginatedApiRequest<{}>) => import("./PaginatedResponse.machine").PaginatedApiRequest<{}>;
    'api.success': (payload: ApiSuccessResponse<KafkaRequest>) => ApiSuccessResponse<KafkaRequest>;
    'api.error': (payload: {
        error: string;
    }) => {
        error: string;
    };
    selectCluster: (payload: {
        selectedCluster: string;
    }) => {
        selectedCluster: string;
    };
    deselectCluster: () => {};
    confirm: () => {};
}>>>>;
export declare type ClustersMachineActorRef = ActorRefFrom<typeof clustersMachine>;
export {};
