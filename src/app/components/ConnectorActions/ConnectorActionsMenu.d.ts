import { FunctionComponent } from 'react';
declare type connectorActionsMenuProps = {
    onClose: () => void;
    onConnectorDetail: (id: string, goToConnectorDetails: string) => void;
    onDuplicateConnector: (id: string) => void;
};
export declare const ConnectorActionsMenu: FunctionComponent<connectorActionsMenuProps>;
export {};
