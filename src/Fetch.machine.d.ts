declare type Context<T> = {
    data?: T;
    error?: string;
};
export declare function makeFetchMachine<T>(): import("xstate").StateMachine<Context<T>, any, import("xstate").EventObject, {
    value: any;
    context: Context<T>;
}, import("xstate").ActionObject<Context<T>, import("xstate").EventObject>>;
export {};
