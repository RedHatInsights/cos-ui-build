import { ActorRef, ActorRefFrom } from 'xstate';
export declare const DEFAULT_PAGE_SIZE = 10;
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
export declare type ApiCallback<RawDataType, OrderBy, Search> = (request: PaginatedApiRequest<OrderBy, Search>, onSuccess: (payload: ApiSuccessResponse<RawDataType>) => void, onError: (payload: ApiErrorResponse) => void) => () => void;
export declare type PlaceholderOrderBy = object;
export declare type PlaceholderSearch = object;
export declare type PaginatedApiRequest<OrderBy, Search> = {
    page: number;
    size: number;
    orderBy?: OrderBy;
    search?: Search;
};
export declare type PaginatedApiResponse<DataType> = {
    total: number;
    items?: Array<DataType>;
    error?: string;
};
export declare type PaginatedMachineContext<RawDataType, OrderBy, Search, DataType> = {
    request: PaginatedApiRequest<OrderBy, Search>;
    response?: PaginatedApiResponse<DataType>;
    pollingEnabled: boolean;
    actor?: ActorRef<any>;
    dataTransformer: (response: RawDataType) => DataType;
    onBeforeSetResponse?: (previousData: DataType[] | undefined) => void;
};
export declare type PaginatedMachineOptions<DataType> = {
    initialPageSize?: number;
    pollingEnabled?: boolean;
    onBeforeSetResponse?: (previousResponse: DataType[] | undefined) => void;
};
export declare const getPaginatedApiMachineEvents: <RawDataType, OrderBy, Search, DataType>() => {
    'api.refresh': () => {};
    'api.nextPage': () => {};
    'api.prevPage': () => {};
    'api.query': (payload: PaginatedApiRequest<OrderBy, Search>) => PaginatedApiRequest<OrderBy, Search>;
    'api.setResponse': (payload: ApiSuccessResponse<RawDataType>) => ApiSuccessResponse<RawDataType>;
    'api.setError': (payload: ApiErrorResponse) => ApiErrorResponse;
    'api.ready': () => {};
    'api.loading': (payload: PaginatedApiRequest<OrderBy, Search>) => PaginatedApiRequest<OrderBy, Search>;
    'api.success': (payload: ApiSuccessResponse<DataType>) => ApiSuccessResponse<DataType>;
    'api.error': (payload: {
        error: string;
    }) => {
        error: string;
    };
};
export declare function makePaginatedApiMachine<RawDataType, OrderBy, Search, DataType>(service: ApiCallback<RawDataType, OrderBy, Search>, dataTransformer: (response: RawDataType) => DataType, options?: PaginatedMachineOptions<DataType>): import("xstate").StateMachine<PaginatedMachineContext<RawDataType, OrderBy, Search, DataType>, any, import("xstate/lib/model.types").UnionFromCreatorsReturnTypes<import("xstate/lib/model.types").FinalEventCreators<{
    'api.refresh': () => {};
    'api.nextPage': () => {};
    'api.prevPage': () => {};
    'api.query': (payload: PaginatedApiRequest<OrderBy, Search>) => PaginatedApiRequest<OrderBy, Search>;
    'api.setResponse': (payload: ApiSuccessResponse<RawDataType>) => ApiSuccessResponse<RawDataType>;
    'api.setError': (payload: ApiErrorResponse) => ApiErrorResponse;
    'api.ready': () => {};
    'api.loading': (payload: PaginatedApiRequest<OrderBy, Search>) => PaginatedApiRequest<OrderBy, Search>;
    'api.success': (payload: ApiSuccessResponse<DataType>) => ApiSuccessResponse<DataType>;
    'api.error': (payload: {
        error: string;
    }) => {
        error: string;
    };
}>>, {
    value: any;
    context: PaginatedMachineContext<RawDataType, OrderBy, Search, DataType>;
}, import("xstate").ActionObject<PaginatedMachineContext<RawDataType, OrderBy, Search, DataType>, import("xstate/lib/model.types").UnionFromCreatorsReturnTypes<import("xstate/lib/model.types").FinalEventCreators<{
    'api.refresh': () => {};
    'api.nextPage': () => {};
    'api.prevPage': () => {};
    'api.query': (payload: PaginatedApiRequest<OrderBy, Search>) => PaginatedApiRequest<OrderBy, Search>;
    'api.setResponse': (payload: ApiSuccessResponse<RawDataType>) => ApiSuccessResponse<RawDataType>;
    'api.setError': (payload: ApiErrorResponse) => ApiErrorResponse;
    'api.ready': () => {};
    'api.loading': (payload: PaginatedApiRequest<OrderBy, Search>) => PaginatedApiRequest<OrderBy, Search>;
    'api.success': (payload: ApiSuccessResponse<DataType>) => ApiSuccessResponse<DataType>;
    'api.error': (payload: {
        error: string;
    }) => {
        error: string;
    };
}>>>>;
declare class Wrapper<RawDataType, OrderBy, Search, DataType> {
    wrapped(service: ApiCallback<RawDataType, OrderBy, Search>, dataTransformer: (response: RawDataType) => DataType): import("xstate").StateMachine<PaginatedMachineContext<RawDataType, OrderBy, Search, DataType>, any, import("xstate/lib/model.types").UnionFromCreatorsReturnTypes<import("xstate/lib/model.types").FinalEventCreators<{
        'api.refresh': () => {};
        'api.nextPage': () => {};
        'api.prevPage': () => {};
        'api.query': (payload: PaginatedApiRequest<OrderBy, Search>) => PaginatedApiRequest<OrderBy, Search>;
        'api.setResponse': (payload: ApiSuccessResponse<RawDataType>) => ApiSuccessResponse<RawDataType>;
        'api.setError': (payload: ApiErrorResponse) => ApiErrorResponse;
        'api.ready': () => {};
        'api.loading': (payload: PaginatedApiRequest<OrderBy, Search>) => PaginatedApiRequest<OrderBy, Search>;
        'api.success': (payload: ApiSuccessResponse<DataType>) => ApiSuccessResponse<DataType>;
        'api.error': (payload: {
            error: string;
        }) => {
            error: string;
        };
    }>>, {
        value: any;
        context: PaginatedMachineContext<RawDataType, OrderBy, Search, DataType>;
    }, import("xstate").ActionObject<PaginatedMachineContext<RawDataType, OrderBy, Search, DataType>, import("xstate/lib/model.types").UnionFromCreatorsReturnTypes<import("xstate/lib/model.types").FinalEventCreators<{
        'api.refresh': () => {};
        'api.nextPage': () => {};
        'api.prevPage': () => {};
        'api.query': (payload: PaginatedApiRequest<OrderBy, Search>) => PaginatedApiRequest<OrderBy, Search>;
        'api.setResponse': (payload: ApiSuccessResponse<RawDataType>) => ApiSuccessResponse<RawDataType>;
        'api.setError': (payload: ApiErrorResponse) => ApiErrorResponse;
        'api.ready': () => {};
        'api.loading': (payload: PaginatedApiRequest<OrderBy, Search>) => PaginatedApiRequest<OrderBy, Search>;
        'api.success': (payload: ApiSuccessResponse<DataType>) => ApiSuccessResponse<DataType>;
        'api.error': (payload: {
            error: string;
        }) => {
            error: string;
        };
    }>>>>;
}
export declare type PaginatedApiActorType<RawDataType, OrderBy, Search, DataType> = ActorRefFrom<ReturnType<Wrapper<RawDataType, OrderBy, Search, DataType>['wrapped']>>;
export declare type usePaginationReturnValue<OrderBy, Search, DataType> = {
    request: PaginatedApiRequest<OrderBy, Search>;
    response?: PaginatedApiResponse<DataType>;
    loading: boolean;
    queryEmpty: boolean;
    queryResults: boolean;
    noResults: boolean;
    results: boolean;
    error: boolean;
    firstRequest: boolean;
};
export declare const usePagination: <RawDataType, OrderBy, Search, DataType>(actor: import("xstate").ActorRefWithDeprecatedState<PaginatedMachineContext<RawDataType, OrderBy, Search, DataType>, {
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
    orderBy?: OrderBy | undefined;
    search?: Search | undefined;
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
    orderBy?: OrderBy | undefined;
    search?: Search | undefined;
    type: "api.loading";
} | {
    items: DataType[];
    page: number;
    size: number;
    total: number;
    type: "api.success";
}, {
    value: any;
    context: PaginatedMachineContext<RawDataType, OrderBy, Search, DataType>;
}>) => usePaginationReturnValue<OrderBy, Search, DataType>;
export {};
