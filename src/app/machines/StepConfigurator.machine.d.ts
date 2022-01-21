import { ActorRefFrom } from 'xstate';
import { ConnectorType } from '@rhoas/connector-management-sdk';
declare type ConnectorTypePatched = Omit<ConnectorType, 'json_schema'> & {
    schema: ConnectorType['json_schema'];
};
declare type Context = {
    connector: ConnectorTypePatched;
    steps: string[];
    activeStep: number;
    isActiveStepValid: boolean;
    configuration: unknown;
};
export declare const configuratorMachine: import("xstate").StateMachine<Context, any, import("xstate/lib/model.types").UnionFromCreatorsReturnTypes<import("xstate/lib/model.types").FinalEventCreators<{
    entry: () => {};
    change: ({ configuration, isValid, }: {
        configuration: unknown;
        isValid: boolean;
    }) => {
        configuration: unknown;
        isValid: boolean;
    };
    next: () => {};
    prev: () => {};
    complete: () => {};
}>>, {
    value: any;
    context: Context;
}, import("xstate").ActionObject<Context, import("xstate/lib/model.types").UnionFromCreatorsReturnTypes<import("xstate/lib/model.types").FinalEventCreators<{
    entry: () => {};
    change: ({ configuration, isValid, }: {
        configuration: unknown;
        isValid: boolean;
    }) => {
        configuration: unknown;
        isValid: boolean;
    };
    next: () => {};
    prev: () => {};
    complete: () => {};
}>>>>;
export declare type ConfiguratorActorRef = ActorRefFrom<typeof configuratorMachine>;
export {};
