import { Component, HTMLProps, ReactNode } from 'react';
import { PickOptional, WizardNavItemProps } from '@patternfly/react-core';
export declare function getFlattenedSteps(steps: WizardStep[]): WizardStep[];
export interface WizardStep {
    /** Optional identifier */
    id?: string | number;
    /** The name of the step */
    name: ReactNode;
    /** The component to render in the main body */
    component?: any;
    /** Setting to true hides the side nav and footer */
    isFinishedStep?: boolean;
    /** Enables or disables the step in the navigation. Enabled by default. */
    canJumpTo?: boolean;
    /** Sub steps */
    steps?: WizardStep[];
    /** Props to pass to the WizardNavItem */
    stepNavItemProps?: HTMLProps<HTMLButtonElement | HTMLAnchorElement> | WizardNavItemProps;
    /** (Unused if footer is controlled) Can change the Next button text. If nextButtonText is also set for the Wizard, this step specific one overrides it. */
    nextButtonText?: ReactNode;
    /** (Unused if footer is controlled) The condition needed to enable the Next button */
    enableNext?: boolean;
    /** (Unused if footer is controlled) True to hide the Cancel button */
    hideCancelButton?: boolean;
    /** (Unused if footer is controlled) True to hide the Back button */
    hideBackButton?: boolean;
}
export declare type WizardStepFunctionType = (newStep: {
    id?: string | number;
    name: ReactNode;
}, prevStep: {
    prevId?: string | number;
    prevName: ReactNode;
}) => void;
export interface WizardProps extends HTMLProps<HTMLDivElement> {
    /** Custom width of the wizard */
    width?: number | string;
    /** Custom height of the wizard */
    height?: number | string;
    /** The wizard title to display if header is desired */
    title?: string;
    /** An optional id for the title */
    titleId?: string;
    /** An optional id for the description */
    descriptionId?: string;
    /** The wizard description */
    description?: ReactNode;
    /** Flag indicating whether the close button should be in the header */
    hideClose?: boolean;
    /** Callback function to close the wizard */
    onClose: () => void;
    /** Callback function when a step in the nav is clicked */
    onGoToStep?: WizardStepFunctionType;
    /** Additional classes spread to the Wizard */
    className?: string;
    /** The wizard steps configuration object */
    steps: WizardStep[];
    /** The current step the wizard is on (1 or higher) */
    currentStep: number;
    /** Aria-label for the Nav */
    navAriaLabel?: string;
    /** Sets aria-labelledby on nav element */
    navAriaLabelledBy?: string;
    /** Aria-label for the main element */
    mainAriaLabel?: string;
    /** Sets aria-labelledby on the main element */
    mainAriaLabelledBy?: string;
    /** Can remove the default padding around the main body content by setting this to true */
    hasNoBodyPadding?: boolean;
    /** (Use to control the footer) Passing in a footer component lets you control the buttons yourself */
    footer?: ReactNode;
    /** (Unused if footer is controlled) Callback function to save at the end of the wizard, if not specified uses onClose */
    onSave: () => void;
    /** (Unused if footer is controlled) Callback function after Next button is clicked */
    onNext: () => void;
    /** (Unused if footer is controlled) Callback function after Back button is clicked */
    onBack: () => void;
    goToStep: (index: number) => void;
    goToStepById: (id: number | string) => void;
    goToStepByName: (name: string) => void;
    /** (Unused if footer is controlled) The Next button text */
    nextButtonText?: ReactNode;
    /** (Unused if footer is controlled) The Back button text */
    backButtonText?: ReactNode;
    /** (Unused if footer is controlled) The Cancel button text */
    cancelButtonText?: ReactNode;
    /** (Unused if footer is controlled) aria-label for the close button */
    closeButtonAriaLabel?: string;
    /** The parent container to append the modal to. Defaults to document.body */
    appendTo?: HTMLElement | (() => HTMLElement);
    /** Flag indicating Wizard modal is open. Wizard will be placed into a modal if this prop is provided */
    isOpen?: boolean;
}
interface WizardState {
    isNavOpen: boolean;
}
export declare class UncontrolledWizard extends Component<WizardProps, WizardState> {
    static displayName: string;
    private static currentId;
    static defaultProps: PickOptional<WizardProps>;
    private titleId;
    private descriptionId;
    constructor(props: WizardProps);
    private handleKeyClicks;
    private getFlattenedSteps;
    private getFlattenedStepsIndex;
    private initSteps;
    getElement: (appendTo: HTMLElement | (() => HTMLElement)) => HTMLElement;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export {};
