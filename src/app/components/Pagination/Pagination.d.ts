import { FunctionComponent } from 'react';
import './Pagination.css';
export declare type PaginationEvent<OrderBy, Search> = {
    page: number;
    size: number;
    orderBy?: OrderBy;
    search?: Search;
};
export declare type PaginationProps<OrderBy, Search> = {
    itemCount: number;
    page: number;
    perPage: number;
    isCompact?: boolean;
    onChange: (event: PaginationEvent<OrderBy, Search>) => void;
    orderBy?: OrderBy;
    search?: Search;
};
export declare const Pagination: FunctionComponent<PaginationProps<object, object>>;
