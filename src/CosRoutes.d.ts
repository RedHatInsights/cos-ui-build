import { FunctionComponent } from 'react';
declare type CosRoutesProps = {
    getToken: () => Promise<string>;
    apiBasepath: string;
};
export declare const CosRoutes: FunctionComponent<CosRoutesProps>;
export {};
