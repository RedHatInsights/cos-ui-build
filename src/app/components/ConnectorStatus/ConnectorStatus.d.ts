import { FC } from 'react';
import './ConnectorStatus.css';
declare type ConnectorStatusProps = {
    desiredState: string;
    name: string;
    state: string;
};
export declare const ConnectorStatus: FC<ConnectorStatusProps>;
declare type ConnectorStatusLabelProps = {
    desiredState: string;
    state: string;
};
export declare const ConnectorStatusLabel: FC<ConnectorStatusLabelProps>;
declare type ConnectorStatusIconProps = {
    name: string;
    state: string;
};
export declare const ConnectorStatusIcon: FC<ConnectorStatusIconProps>;
export declare function convertToLabel(state: string): string;
export {};
