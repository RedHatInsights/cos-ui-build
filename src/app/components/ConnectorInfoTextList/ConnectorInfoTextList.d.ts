import { FunctionComponent, ReactNode } from 'react';
import { KafkaInstance } from '@rhoas/app-services-ui-shared';
import './ConnectorInfoTextList.css';
declare type AlertType = 'info' | 'warning' | 'danger' | undefined;
export declare type ConnectorInfoTextListProps = {
    name: string;
    id: string;
    type?: string;
    bootstrapServer: string;
    kafkaId: string | KafkaInstance | ReactNode;
    owner: string;
    namespaceId: string | ReactNode;
    namespaceMsg?: string | undefined;
    namespaceMsgVariant: AlertType;
    createdAt: Date;
    modifiedAt: Date;
    error?: string;
};
export declare const ConnectorInfoTextList: FunctionComponent<ConnectorInfoTextListProps>;
export {};
