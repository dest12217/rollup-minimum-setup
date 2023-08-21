import typescript from '@rollup/plugin-typescript';

/** @var import('rollup').RollupOptions */
export default {
    input: 'src/index.ts',
    output: {
        name: 'rollup-minimum-setup',
        file: 'dist/bundle.js',
        format: 'iife',
    },
    plugins: [
        typescript(),
    ],
};