import React from 'react';
export interface DialogDeleteConnectorProps {
    connectorName: string | undefined;
    onCancel: () => void;
    onConfirm: () => void;
    showDialog: boolean;
}
/**
 * A modal dialog to display confirmation for connector deletion.
 */
export declare const DialogDeleteConnector: React.FunctionComponent<DialogDeleteConnectorProps>;
