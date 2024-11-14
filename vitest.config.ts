import { configDefaults, defineProject } from 'vitest/config';

export default defineProject({
    /**
     * This block is necessary to be able to use the `using` keyword in tests.
     *
     * @see https://github.com/vitest-dev/vitest/issues/4183
     */
    esbuild: {
        target: 'es2022',
    },
    test: {
        name: 'slow-computer',
        environment: 'jsdom',
        setupFiles: ['./tests/setup.ts'],
        exclude: [...configDefaults.exclude, '**/__generated__/**'],
    },
    define: {
        __FME_VERSION__: JSON.stringify('1.0.0-test'),
        __FME_COMMIT_REF__: JSON.stringify(process.env.FME_COMMIT_REF),
    },
});
