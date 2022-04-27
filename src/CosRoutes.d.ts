import { FunctionComponent } from 'react';
declare type CosRoutesProps = {
    getToken: () => Promise<string>;
    connectorsApiBasePath: string;
    kafkaManagementApiBasePath: string;
};
export declare const CosRoutes: FunctionComponent<CosRoutesProps>;
export {};
