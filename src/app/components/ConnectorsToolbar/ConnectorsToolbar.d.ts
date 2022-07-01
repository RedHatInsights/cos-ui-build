import { ConnectorsOrderBy, ConnectorsSearch } from '@apis/api';
import { PaginationProps } from '@app/components/Pagination/Pagination';
import { FunctionComponent } from 'react';
declare type ConnectorsToolbarProps = {} & PaginationProps<ConnectorsOrderBy, ConnectorsSearch>;
export declare const ConnectorsToolbar: FunctionComponent<ConnectorsToolbarProps>;
export {};
