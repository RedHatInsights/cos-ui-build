import { ActorRef, ActorRefFrom } from 'xstate';
export declare type ApiErrorResponse = {
    page: number;
    error: string;
};
export declare type ApiSuccessResponse<RawDataType> = {
    items: Array<RawDataType>;
    page: number;
    size: number;
    total: number;
};
export declare type ApiCallback<RawDataType, QueryType> = (request: PaginatedApiRequest<QueryType>, onSuccess: (payload: ApiSuccessResponse<RawDataType>) => void, onError: (payload: ApiErrorResponse) => void) => () => void;
export declare type PaginatedApiRequest<QueryType> = {
    page: number;
    size: number;
    query?: QueryType;
};
export declare type PaginatedApiResponse<DataType> = {
    total: number;
    items?: Array<DataType>;
    error?: string;
};
export declare type PaginatedMachineContext<RawDataType, QueryType, DataType> = {
    request: PaginatedApiRequest<QueryType>;
    response?: PaginatedApiResponse<DataType>;
    pollingEnabled: boolean;
    actor?: ActorRef<any>;
    dataTransformer: (response: RawDataType) => DataType;
    onBeforeSetResponse?: (previousData: DataType[] | undefined) => void;
};
export declare const getPaginatedApiMachineEvents: <RawDataType, QueryType, DataType>() => {
    'api.refresh': () => {};
    'api.nextPage': () => {};
    'api.prevPage': () => {};
    'api.query': (payload: PaginatedApiRequest<QueryType>) => PaginatedApiRequest<QueryType>;
    'api.setResponse': (payload: ApiSuccessResponse<RawDataType>) => ApiSuccessResponse<RawDataType>;
    'api.setError': (payload: ApiErrorResponse) => ApiErrorResponse;
    'api.ready': () => {};
    'api.loading': (payload: PaginatedApiRequest<QueryType>) => PaginatedApiRequest<QueryType>;
    'api.success': (payload: ApiSuccessResponse<DataType>) => ApiSuccessResponse<DataType>;
    'api.error': (payload: {
        error: string;
    }) => {
        error: string;
    };
};
export declare function makePaginatedApiMachine<RawDataType, QueryType, DataType>(service: ApiCallback<RawDataType, QueryType>, dataTransformer: (response: RawDataType) => DataType, options?: {
    pollingEnabled?: boolean;
    onBeforeSetResponse?: (previousResponse: DataType[] | undefined) => void;
}): import("xstate").StateMachine<PaginatedMachineContext<RawDataType, QueryType, DataType>, any, import("xstate/lib/model.types").UnionFromCreatorsReturnTypes<import("xstate/lib/model.types").FinalEventCreators<{
    'api.refresh': () => {};
    'api.nextPage': () => {};
    'api.prevPage': () => {};
    'api.query': (payload: PaginatedApiRequest<QueryType>) => PaginatedApiRequest<QueryType>;
    'api.setResponse': (payload: ApiSuccessResponse<RawDataType>) => ApiSuccessResponse<RawDataType>;
    'api.setError': (payload: ApiErrorResponse) => ApiErrorResponse;
    'api.ready': () => {};
    'api.loading': (payload: PaginatedApiRequest<QueryType>) => PaginatedApiRequest<QueryType>;
    'api.success': (payload: ApiSuccessResponse<DataType>) => ApiSuccessResponse<DataType>;
    'api.error': (payload: {
        error: string;
    }) => {
        error: string;
    };
}>>, {
    value: any;
    context: PaginatedMachineContext<RawDataType, QueryType, DataType>;
}, import("xstate").ActionObject<PaginatedMachineContext<RawDataType, QueryType, DataType>, import("xstate/lib/model.types").UnionFromCreatorsReturnTypes<import("xstate/lib/model.types").FinalEventCreators<{
    'api.refresh': () => {};
    'api.nextPage': () => {};
    'api.prevPage': () => {};
    'api.query': (payload: PaginatedApiRequest<QueryType>) => PaginatedApiRequest<QueryType>;
    'api.setResponse': (payload: ApiSuccessResponse<RawDataType>) => ApiSuccessResponse<RawDataType>;
    'api.setError': (payload: ApiErrorResponse) => ApiErrorResponse;
    'api.ready': () => {};
    'api.loading': (payload: PaginatedApiRequest<QueryType>) => PaginatedApiRequest<QueryType>;
    'api.success': (payload: ApiSuccessResponse<DataType>) => ApiSuccessResponse<DataType>;
    'api.error': (payload: {
        error: string;
    }) => {
        error: string;
    };
}>>>>;
declare class Wrapper<RawDataType, QueryType, DataType> {
    wrapped(service: ApiCallback<RawDataType, QueryType>, dataTransformer: (response: RawDataType) => DataType): import("xstate").StateMachine<PaginatedMachineContext<RawDataType, QueryType, DataType>, any, import("xstate/lib/model.types").UnionFromCreatorsReturnTypes<import("xstate/lib/model.types").FinalEventCreators<{
        'api.refresh': () => {};
        'api.nextPage': () => {};
        'api.prevPage': () => {};
        'api.query': (payload: PaginatedApiRequest<QueryType>) => PaginatedApiRequest<QueryType>;
        'api.setResponse': (payload: ApiSuccessResponse<RawDataType>) => ApiSuccessResponse<RawDataType>;
        'api.setError': (payload: ApiErrorResponse) => ApiErrorResponse;
        'api.ready': () => {};
        'api.loading': (payload: PaginatedApiRequest<QueryType>) => PaginatedApiRequest<QueryType>;
        'api.success': (payload: ApiSuccessResponse<DataType>) => ApiSuccessResponse<DataType>;
        'api.error': (payload: {
            error: string;
        }) => {
            error: string;
        };
    }>>, {
        value: any;
        context: PaginatedMachineContext<RawDataType, QueryType, DataType>;
    }, import("xstate").ActionObject<PaginatedMachineContext<RawDataType, QueryType, DataType>, import("xstate/lib/model.types").UnionFromCreatorsReturnTypes<import("xstate/lib/model.types").FinalEventCreators<{
        'api.refresh': () => {};
        'api.nextPage': () => {};
        'api.prevPage': () => {};
        'api.query': (payload: PaginatedApiRequest<QueryType>) => PaginatedApiRequest<QueryType>;
        'api.setResponse': (payload: ApiSuccessResponse<RawDataType>) => ApiSuccessResponse<RawDataType>;
        'api.setError': (payload: ApiErrorResponse) => ApiErrorResponse;
        'api.ready': () => {};
        'api.loading': (payload: PaginatedApiRequest<QueryType>) => PaginatedApiRequest<QueryType>;
        'api.success': (payload: ApiSuccessResponse<DataType>) => ApiSuccessResponse<DataType>;
        'api.error': (payload: {
            error: string;
        }) => {
            error: string;
        };
    }>>>>;
}
export declare type PaginatedApiActorType<RawDataType, QueryType, DataType> = ActorRefFrom<ReturnType<Wrapper<RawDataType, QueryType, DataType>['wrapped']>>;
export declare type usePaginationReturnValue<QueryType, DataType> = {
    request: PaginatedApiRequest<QueryType>;
    response?: PaginatedApiResponse<DataType>;
    loading: boolean;
    queryEmpty: boolean;
    queryResults: boolean;
    noResults: boolean;
    results: boolean;
    error: boolean;
    firstRequest: boolean;
};
export declare const usePagination: <RawDataType, QueryType, DataType>(actor: import("xstate").ActorRefWithDeprecatedState<PaginatedMachineContext<RawDataType, QueryType, DataType>, {
    type: "api.refresh";
} | {
    type: "api.nextPage";
} | {
    type: "api.prevPage";
} | {
    page: number;
    error: string;
    type: "api.setError";
} | {
    type: "api.ready";
} | {
    error: string;
    type: "api.error";
} | {
    page: number;
    size: number;
    query?: QueryType | undefined;
    type: "api.query";
} | {
    items: RawDataType[];
    page: number;
    size: number;
    total: number;
    type: "api.setResponse";
} | {
    page: number;
    size: number;
    query?: QueryType | undefined;
    type: "api.loading";
} | {
    items: DataType[];
    page: number;
    size: number;
    total: number;
    type: "api.success";
}, {
    value: any;
    context: PaginatedMachineContext<RawDataType, QueryType, DataType>;
}>) => usePaginationReturnValue<QueryType, DataType>;
export {};
