import { FunctionComponent } from 'react';
export declare type ConnectorInfoTextListProps = {
    name: string;
    id: string;
    type?: string;
    bootstrapServer: string;
    kafkaId: string;
    owner: string;
    namespaceId: string;
    createdAt: Date;
    modifiedAt: Date;
    error?: string;
};
export declare const ConnectorInfoTextList: FunctionComponent<ConnectorInfoTextListProps>;
