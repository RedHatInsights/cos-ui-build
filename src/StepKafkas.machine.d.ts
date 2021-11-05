import { ActorRefFrom } from 'xstate';
import { KafkaRequest } from '@rhoas/kafka-management-sdk';
import { PaginatedApiResponse } from './PaginatedResponse.machine';
import { KafkasQuery } from './api';
declare type Context = {
    accessToken: () => Promise<string>;
    kafkaManagementBasePath: string;
    response?: PaginatedApiResponse<KafkaRequest>;
    selectedInstance?: KafkaRequest;
    error?: Object;
};
export declare const kafkasMachine: import("xstate").StateMachine<Context, any, import("xstate/lib/model.types").UnionFromCreatorsReturnTypes<import("xstate/lib/model.types").FinalEventCreators<{
    'api.refresh': () => {};
    'api.nextPage': () => {};
    'api.prevPage': () => {};
    'api.query': (payload: import("./PaginatedResponse.machine").PaginatedApiRequest<KafkasQuery>) => import("./PaginatedResponse.machine").PaginatedApiRequest<KafkasQuery>;
    'api.setResponse': (payload: import("./PaginatedResponse.machine").ApiSuccessResponse<KafkaRequest>) => import("./PaginatedResponse.machine").ApiSuccessResponse<KafkaRequest>;
    'api.setError': (payload: import("./PaginatedResponse.machine").ApiErrorResponse) => import("./PaginatedResponse.machine").ApiErrorResponse;
    'api.ready': () => {};
    'api.loading': (payload: import("./PaginatedResponse.machine").PaginatedApiRequest<KafkasQuery>) => import("./PaginatedResponse.machine").PaginatedApiRequest<KafkasQuery>;
    'api.success': (payload: import("./PaginatedResponse.machine").ApiSuccessResponse<KafkaRequest>) => import("./PaginatedResponse.machine").ApiSuccessResponse<KafkaRequest>;
    'api.error': (payload: {
        error: string;
    }) => {
        error: string;
    };
    selectInstance: (payload: {
        selectedInstance: string;
    }) => {
        selectedInstance: string;
    };
    deselectInstance: () => {};
    confirm: () => {};
}>>, {
    value: any;
    context: Context;
}, import("xstate").ActionObject<Context, import("xstate/lib/model.types").UnionFromCreatorsReturnTypes<import("xstate/lib/model.types").FinalEventCreators<{
    'api.refresh': () => {};
    'api.nextPage': () => {};
    'api.prevPage': () => {};
    'api.query': (payload: import("./PaginatedResponse.machine").PaginatedApiRequest<KafkasQuery>) => import("./PaginatedResponse.machine").PaginatedApiRequest<KafkasQuery>;
    'api.setResponse': (payload: import("./PaginatedResponse.machine").ApiSuccessResponse<KafkaRequest>) => import("./PaginatedResponse.machine").ApiSuccessResponse<KafkaRequest>;
    'api.setError': (payload: import("./PaginatedResponse.machine").ApiErrorResponse) => import("./PaginatedResponse.machine").ApiErrorResponse;
    'api.ready': () => {};
    'api.loading': (payload: import("./PaginatedResponse.machine").PaginatedApiRequest<KafkasQuery>) => import("./PaginatedResponse.machine").PaginatedApiRequest<KafkasQuery>;
    'api.success': (payload: import("./PaginatedResponse.machine").ApiSuccessResponse<KafkaRequest>) => import("./PaginatedResponse.machine").ApiSuccessResponse<KafkaRequest>;
    'api.error': (payload: {
        error: string;
    }) => {
        error: string;
    };
    selectInstance: (payload: {
        selectedInstance: string;
    }) => {
        selectedInstance: string;
    };
    deselectInstance: () => {};
    confirm: () => {};
}>>>>;
export declare type KafkaMachineActorRef = ActorRefFrom<typeof kafkasMachine>;
export {};
