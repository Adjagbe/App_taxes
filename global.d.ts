/// <reference types="next" />
/// <reference types="next/image-types/global" />

// global.d.ts
import { IStaticMethods } from "flyonui/flyonui";
import noUiSlider from 'nouislider';

declare global {
    interface Window {
        // Optional third-party libraries
        _;
        $: typeof import("jquery");
        jQuery: typeof import("jquery");
        DataTable;
        Dropzone;

        HSStaticMethods: IStaticMethods;
        noUiSlider: typeof noUiSlider;
    }
}

export { };