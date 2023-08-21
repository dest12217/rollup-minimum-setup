import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import pkg from './package.json' assert { type: 'json' };

/** @var import('rollup').RollupOptions */
export default {
    input: 'src/index.ts',
    output: [
        {
            name: 'rollupMinimumSetup',
            file: pkg.browser,
            format: 'iife',
        },
        {
            name: 'rollupMinimumSetup',
            file: pkg.browser.replace(/\.js$/, '.min.js'),
            format: 'iife',
            plugins: [
                terser(),
            ],
        },
        {
            name: 'rollupMinimumSetup',
            file: pkg.module,
            format: 'es',
        },
        {
            name: 'rollupMinimumSetup',
            file: pkg.main,
            format: 'cjs',
        },
    ],
    plugins: [
        typescript(),
    ],
};