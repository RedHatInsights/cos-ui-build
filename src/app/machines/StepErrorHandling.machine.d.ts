import { ActorRefFrom } from 'xstate';
import { ConnectorType } from '@rhoas/connector-management-sdk';
declare type Context = {
    connector: ConnectorType;
    topic: string;
    userErrorHandler?: any;
    duplicateMode?: boolean;
};
export declare const errorHandlingMachine: import("xstate").StateMachine<Context, any, import("xstate/lib/model.types").UnionFromCreatorsReturnTypes<import("xstate/lib/model.types").FinalEventCreators<{
    setTopic: (payload: {
        topic: string;
    }) => {
        topic: string;
    };
    setErrorHandler: (payload: {
        errorHandler: any | undefined;
    }) => {
        errorHandler: any | undefined;
    };
    confirm: () => {};
}>>, {
    value: any;
    context: Context;
}, import("xstate").ActionObject<Context, import("xstate/lib/model.types").UnionFromCreatorsReturnTypes<import("xstate/lib/model.types").FinalEventCreators<{
    setTopic: (payload: {
        topic: string;
    }) => {
        topic: string;
    };
    setErrorHandler: (payload: {
        errorHandler: any | undefined;
    }) => {
        errorHandler: any | undefined;
    };
    confirm: () => {};
}>>>>;
export declare type ErrorHandlingMachineActorRef = ActorRefFrom<typeof errorHandlingMachine>;
export {};
