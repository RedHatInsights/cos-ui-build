import { UserProvidedServiceAccount } from '@apis/api';
import { FC } from 'react';
declare type CreateServiceAccountProps = {
    isOpen: boolean;
    sACreated: boolean;
    handleModalToggle: () => void;
    serviceAccount: UserProvidedServiceAccount;
    onSetServiceAccount: (data: UserProvidedServiceAccount) => void;
    onSetSaCreated: (val: boolean) => void;
};
export declare const CreateServiceAccount: FC<CreateServiceAccountProps>;
export {};
