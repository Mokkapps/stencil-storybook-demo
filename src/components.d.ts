/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { CompOption } from "./components/my-component/my-component";
export namespace Components {
    interface MyComponent {
        /**
          * If true, the button is displayed as disabled
         */
        "disabled": boolean;
        /**
          * The text which is shown as label
         */
        "label": string;
        /**
          * Is needed to reference the form data after the form is submitted
         */
        "name": string;
        /**
          * Define the available options in the drop-down list
         */
        "options": CompOption[];
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * If true, the button is displayed as disabled
         */
        "disabled"?: boolean;
        /**
          * The text which is shown as label
         */
        "label"?: string;
        /**
          * Is needed to reference the form data after the form is submitted
         */
        "name"?: string;
        /**
          * Define the available options in the drop-down list
         */
        "options"?: CompOption[];
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
