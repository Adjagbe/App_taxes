// // FlyonuiScript.tsx
// 'use client';

// import { usePathname } from 'next/navigation';
// import { useEffect } from 'react';

// // Optional third-party libraries
// import $ from 'jquery';
// import _ from 'lodash';
// import noUiSlider from 'nouislider';
// import 'datatables.net';
// import 'dropzone/dist/dropzone-min.js';

// window.$ = $;
// window._ = _;
// window.jQuery = $;
// window.DataTable = $.fn.dataTable;
// window.noUiSlider = noUiSlider;

// async function loadFlyonUI() {
//   return import('flyonui/flyonui');
// }

// export default function FlyonuiScript() {
//   const path = usePathname();

//   useEffect(() => {
//     const initFlyonUI = async () => {
//       await loadFlyonUI();
//     };

//     initFlyonUI();
//   }, []);

//   useEffect(() => {
//     setTimeout(() => {
//       if (
//         window.HSStaticMethods &&
//         typeof window.HSStaticMethods.autoInit === 'function'
//       ) {
//         window.HSStaticMethods.autoInit();
//       }
//     }, 100);
//   }, [path]);

//   return null;
// }

// FlyonuiScript.tsx
'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function FlyonuiScript() {
  const path = usePathname();

  useEffect(() => {
    const initLibs = async () => {
      if (typeof window !== 'undefined') {
        const [{ default: $ }, { default: _ }, noUiSlider] = await Promise.all([
          import('jquery'),
          import('lodash'),
          import('nouislider')
        ]);

        window.$ = $;
        window.jQuery = $;
        window._ = _;
        window.noUiSlider = noUiSlider as any;


        await import('datatables.net');
        window.DataTable = $.fn.dataTable;


        await import('flyonui/flyonui');
      }
    };

    initLibs();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (
        typeof window !== 'undefined' &&
        window.HSStaticMethods &&
        typeof window.HSStaticMethods.autoInit === 'function'
      ) {
        window.HSStaticMethods.autoInit();
      }
    }, 100);
  }, [path]);

  return null;
}
