import { FunctionComponent } from 'react';
import './ConnectorInfoTextList.css';
declare type AlertType = 'info' | 'warning' | 'danger' | undefined;
export declare type ConnectorInfoTextListProps = {
    name: string;
    id: string;
    type?: string;
    bootstrapServer: string;
    kafkaId: string;
    owner: string;
    namespaceId: string;
    namespaceMsg?: string | undefined;
    namespaceMsgVariant: AlertType;
    createdAt: Date;
    modifiedAt: Date;
    error?: string;
};
export declare const ConnectorInfoTextList: FunctionComponent<ConnectorInfoTextListProps>;
export {};
