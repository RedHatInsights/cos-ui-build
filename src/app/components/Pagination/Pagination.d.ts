import { FunctionComponent } from 'react';
export declare type PaginationProps = {
    itemCount: number;
    page: number;
    perPage: number;
    isCompact?: boolean;
    onChange: (page: number, perPage: number) => void;
};
export declare const Pagination: FunctionComponent<PaginationProps>;
