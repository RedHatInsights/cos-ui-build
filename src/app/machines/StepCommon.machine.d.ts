import { UserProvidedServiceAccount } from '@apis/api';
import { ActorRefFrom } from 'xstate';
declare type Context = {
    name: string;
    sACreated: boolean;
    userServiceAccount: UserProvidedServiceAccount;
};
export declare const basicMachine: import("xstate").StateMachine<Context, any, import("xstate/lib/model.types").UnionFromCreatorsReturnTypes<import("xstate/lib/model.types").FinalEventCreators<{
    setName: (payload: {
        name: string;
    }) => {
        name: string;
    };
    setSaCreated: (payload: {
        sACreated: boolean;
    }) => {
        sACreated: boolean;
    };
    setServiceAccount: (payload: {
        serviceAccount: UserProvidedServiceAccount;
    }) => {
        serviceAccount: UserProvidedServiceAccount;
    };
    confirm: () => {};
}>>, {
    value: any;
    context: Context;
}, import("xstate").ActionObject<Context, import("xstate/lib/model.types").UnionFromCreatorsReturnTypes<import("xstate/lib/model.types").FinalEventCreators<{
    setName: (payload: {
        name: string;
    }) => {
        name: string;
    };
    setSaCreated: (payload: {
        sACreated: boolean;
    }) => {
        sACreated: boolean;
    };
    setServiceAccount: (payload: {
        serviceAccount: UserProvidedServiceAccount;
    }) => {
        serviceAccount: UserProvidedServiceAccount;
    };
    confirm: () => {};
}>>>>;
export declare type BasicMachineActorRef = ActorRefFrom<typeof basicMachine>;
export {};
