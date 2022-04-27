import { FunctionComponent } from 'react';
declare type ConnectorsPageProviderPropsType = {
    accessToken: () => Promise<string>;
    connectorsApiBasePath: string;
    onError: (error: string) => void;
};
declare type ConnectorDetailsPageContextType = {
    accessToken: () => Promise<string>;
    connectorsApiBasePath: string;
    onError: (error: string) => void;
};
export declare const ConnectorDetailsPageProvider: FunctionComponent<ConnectorsPageProviderPropsType>;
export declare const useConnectorDetailsPage: () => ConnectorDetailsPageContextType;
export {};
