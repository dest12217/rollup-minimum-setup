import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

/** @var import('rollup').RollupOptions */
export default {
    input: 'src/index.ts',
    output: [
        {
            name: 'rollupMinimumSetup',
            file: 'dist/bundle.js',
            format: 'iife',
        },
        {
            name: 'rollupMinimumSetup',
            file: 'dist/bundle.min.js',
            format: 'iife',
            plugins: [
                terser(),
            ],
        }
    ],
    plugins: [
        typescript(),
    ],
};