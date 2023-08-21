import typescript from '@rollup/plugin-typescript';

/** @var import('rollup').RollupOptions */
export default {
    input: 'src/index.ts',
    output: {
        name: 'rollupMinimumSetup',
        file: 'dist/bundle.js',
        format: 'iife',
    },
    plugins: [
        typescript(),
    ],
};