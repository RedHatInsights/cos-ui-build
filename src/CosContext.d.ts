import { FunctionComponent } from 'react';
declare type AppContextType = {
    /**
     * Gets the JWT needed by all the API calls. The token comes from Keycloak
     * when running the app in development mode. In production, it will come from
     * the `@bf2/ui-shared` package.
     */
    getToken: () => Promise<string>;
    /**
     * The base path that gets prepended to all API urls.
     * Eg. A `basePath` of `http://my.api.com/something` for an API `/my-api` will
     * generate an URL like `http://my.api.com/something/my-api`
     */
    basePath: string;
};
export declare const CosContextProvider: FunctionComponent<AppContextType>;
export declare const useCos: () => {
    /**
     * Gets the JWT needed by all the API calls. The token comes from Keycloak
     * when running the app in development mode. In production, it will come from
     * the `@bf2/ui-shared` package.
     */
    getToken: () => Promise<string>;
    /**
     * The base path that gets prepended to all API urls.
     * Eg. A `basePath` of `http://my.api.com/something` for an API `/my-api` will
     * generate an URL like `http://my.api.com/something/my-api`
     */
    basePath: string;
};
export {};
