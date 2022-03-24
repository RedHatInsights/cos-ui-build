import { UserProvidedServiceAccount } from '@apis/api';
import { ActorRefFrom } from 'xstate';
import { ConnectorCluster, ConnectorType } from '@rhoas/connector-management-sdk';
import { KafkaRequest } from '@rhoas/kafka-management-sdk';
declare type Context = {
    accessToken: () => Promise<string>;
    connectorsApiBasePath: string;
    kafka: KafkaRequest;
    cluster: ConnectorCluster;
    connectorType: ConnectorType;
    initialConfiguration: unknown;
    name: string;
    userServiceAccount: UserProvidedServiceAccount;
    topic: string;
    userErrorHandler: string;
    configString: string;
    configStringError?: string;
    configStringWarnings?: string[];
    savingError?: string;
};
export declare const reviewMachine: import("xstate").StateMachine<Context, any, import("xstate/lib/model.types").UnionFromCreatorsReturnTypes<import("xstate/lib/model.types").FinalEventCreators<{
    save: () => {};
    success: () => {};
    failure: (payload: {
        message: string;
    }) => {
        message: string;
    };
}>>, {
    value: any;
    context: Context;
}, import("xstate").ActionObject<Context, import("xstate/lib/model.types").UnionFromCreatorsReturnTypes<import("xstate/lib/model.types").FinalEventCreators<{
    save: () => {};
    success: () => {};
    failure: (payload: {
        message: string;
    }) => {
        message: string;
    };
}>>>>;
export declare type ReviewMachineActorRef = ActorRefFrom<typeof reviewMachine>;
export {};
