import testEnv from '../env/tests';

export default {
    'files'   : [ '*.test.js', '**/tests/**' ],
    'env'     : testEnv,
    'extends' : [ 'plugin:mocha/recommended' ],
    'rules'   : {
        'prefer-arrow-callback' : 0,
        'no-magic-numbers'      : 0,

        'security/detect-non-literal-regexp'  : 0,
        'security/detect-non-literal-require' : 0,

        'import/named'   : 0,
        'import/default' : 0,

        'mocha/no-global-tests'          : 0,
        'mocha/no-top-level-hooks'       : 0,
        'mocha/no-exports'               : 0,
        'mocha/no-hooks-for-single-case' : 0,

        'unicorn/filename-case' : [ 'error', {
            'cases' : {
                'kebabCase'  : true,
                'pascalCase' : true,
                'camelCase'  : true // for testing camelCase utils
            }
        } ],

        'sonarjs/no-duplicate-string'    : 0,
        'sonarjs/no-identical-functions' : 0,

        'security/detect-unsafe-regex' : 0,
        'unicorn/no-unsafe-regex'      : 0,

        'node/no-unpublished-import'  : 0,
        'node/no-unpublished-require' : 0,

        'regexp/no-super-linear-backtracking' : 0
    }
};
