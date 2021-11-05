import Keycloak, { KeycloakInstance, KeycloakProfile } from 'keycloak-js';
import React from 'react';
export declare let keycloak: Keycloak.KeycloakInstance | undefined;
/**
 * Get keycloak instance
 *
 * @return an initiated keycloak instance or `undefined`
 * if keycloak isn't configured
 *
 */
export declare const getKeycloakInstance: () => Promise<Keycloak.KeycloakInstance<"legacy"> | undefined>;
/**
 * Initiate keycloak instance.
 *
 * Set keycloak to undefined if
 * keycloak isn't configured
 *
 */
export declare const init: () => Promise<void>;
/**
 * This function keeps getting called by wslink
 * connection param function, so carry out
 * an early return if keycloak is not initialized
 * otherwise get the auth token
 *
 * @return authorization header or empty string
 *
 */
export declare const getAuthHeader: () => Promise<"" | {
    authorization: string;
}>;
/**
 * Use keycloak update token function to retrieve
 * keycloak token
 *
 * @return keycloak token or empty string if keycloak
 * isn't configured
 *
 */
export declare const getKeyCloakToken: () => Promise<string>;
/**
 * Use keycloak update token function to retrieve
 * keycloak token
 *
 * @return keycloak token or empty string if keycloak
 * isn't configured
 *
 */
export declare const getParsedKeyCloakToken: () => Promise<Keycloak.KeycloakTokenParsed>;
/**
 * logout of keycloak, clear cache and offline store then redirect to
 * keycloak login page
 *
 * @param keycloak the keycloak instance
 * @param client offix client
 *
 */
export declare const logout: (keycloak: Keycloak.KeycloakInstance | undefined) => Promise<void>;
export interface IKeycloakContext {
    keycloak?: KeycloakInstance | undefined;
    profile?: KeycloakProfile | undefined;
}
export declare const KeycloakContext: React.Context<IKeycloakContext>;
export declare const KeycloakAuthProvider: React.FunctionComponent;
