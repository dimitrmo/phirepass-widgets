import { Config } from '@stencil/core';

export const config: Config = {
    namespace: 'phirepass-widgets',
    outputTargets: [
        {
            type: 'dist',
            esmLoaderPath: '../loader',
            copy: [
                {
                    src: '../node_modules/phirepass-channel/phirepass-channel_bg.wasm',
                    dest: 'phirepass-channel_bg.wasm',
                },
            ],
        },
        {
            type: 'dist-custom-elements',
            customElementsExportBehavior: 'auto-define-custom-elements',
            externalRuntime: false,
        },
        {
            type: 'docs-readme',
        },
        {
            type: 'www',
            serviceWorker: null, // disable service workers
            copy: [
                {
                    src: '../node_modules/@xterm/xterm/css/xterm.css',
                    dest: '../src/components/phirepass-terminal/xterm.css',
                },
                {
                    src: '../node_modules/phirepass-channel/phirepass-channel_bg.wasm',
                    dest: '../www/build/phirepass-channel_bg.wasm',
                },
            ],
        },
    ],
    testing: {
        browserHeadless: 'shell',
    },
};
