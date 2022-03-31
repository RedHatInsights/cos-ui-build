import { FunctionComponent } from 'react';
import './ConnectorsTable.css';
export declare const ConnectorsTable: FunctionComponent;
declare type ConnectorsTableRowProps = {
    connectorId: string;
    name: string;
    type: string;
    category: string;
    status: string;
    isSelected: boolean;
    canStart: boolean;
    canStop: boolean;
    canDelete: boolean;
    onStart: () => void;
    onStop: () => void;
    onDuplicateConnector: (id: string) => void;
    onDelete: () => void;
    openDetail: (target: string) => void;
    onSelect: () => void;
};
export declare const ConnectorsTableRow: FunctionComponent<ConnectorsTableRowProps>;
export {};
