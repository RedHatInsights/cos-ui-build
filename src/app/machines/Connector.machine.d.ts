import { ActorRefFrom } from 'xstate';
import { Connector } from '@rhoas/connector-management-sdk';
declare type Context = {
    accessToken: () => Promise<string>;
    connectorsApiBasePath: string;
    connector: Connector;
};
export declare const connectorMachine: import("xstate").StateMachine<Context, any, import("xstate/lib/model.types").UnionFromCreatorsReturnTypes<import("xstate/lib/model.types").FinalEventCreators<{
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
    context: Context;
}, import("xstate").ActionObject<Context, import("xstate/lib/model.types").UnionFromCreatorsReturnTypes<import("xstate/lib/model.types").FinalEventCreators<{
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
}>>>>;
export declare const makeConnectorMachine: (context: Context) => import("xstate").StateMachine<Context, any, import("xstate/lib/model.types").UnionFromCreatorsReturnTypes<import("xstate/lib/model.types").FinalEventCreators<{
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
    context: Context;
}, import("xstate").ActionObject<Context, import("xstate/lib/model.types").UnionFromCreatorsReturnTypes<import("xstate/lib/model.types").FinalEventCreators<{
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
}>>>>;
export declare type ConnectorMachineActorRef = ActorRefFrom<typeof connectorMachine>;
export declare type useConnectorReturnType = {
    connector: Connector;
    canStart: boolean;
    canStop: boolean;
    canDelete: boolean;
    onStart: () => void;
    onStop: () => void;
    onDelete: () => void;
    onSelect: () => void;
};
export declare const useConnector: (ref: ConnectorMachineActorRef) => useConnectorReturnType;
export {};
