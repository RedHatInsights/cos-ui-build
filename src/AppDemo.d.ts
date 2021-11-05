import { FunctionComponent } from 'react';
/**
 * Initializes the COS UI with an app that mimicks the console.redhat.com
 * experience.
 *
 * It uses Keycloak to authenticate the user against sso.redhat.com.
 * For it to work it requires the dev server to run at address
 * https://prod.foo.redhat.com:1337.
 *
 * The `baseUrl` for the API can be specified setting the `BASE_PATH` env
 * variable.
 */
export declare const AppDemo: FunctionComponent;
