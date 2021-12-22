import { ActorRefFrom } from 'xstate';
import { UserProvidedServiceAccount } from './api';
declare type Context = {
    name: string;
    userServiceAccount?: UserProvidedServiceAccount;
};
export declare const basicMachine: import("xstate").StateMachine<Context, any, import("xstate/lib/model.types").UnionFromCreatorsReturnTypes<import("xstate/lib/model.types").FinalEventCreators<{
    setName: (payload: {
        name: string;
    }) => {
        name: string;
    };
    setServiceAccount: (payload: {
        serviceAccount: UserProvidedServiceAccount | undefined;
    }) => {
        serviceAccount: UserProvidedServiceAccount | undefined;
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
    setServiceAccount: (payload: {
        serviceAccount: UserProvidedServiceAccount | undefined;
    }) => {
        serviceAccount: UserProvidedServiceAccount | undefined;
    };
    confirm: () => {};
}>>>>;
export declare type BasicMachineActorRef = ActorRefFrom<typeof basicMachine>;
export {};
