import testEnv from '../env/tests';

export default {
    'files'   : [ '*.test.js', 'tests/**' ],
    'env'     : testEnv,
    'extends' : [ 'plugin:mocha/recommended' ],
    'rules'   : {
        'prefer-arrow-callback' : 0,
        'no-magic-numbers'      : 0,

        'security/detect-non-literal-regexp'  : 0,
        'security/detect-non-literal-require' : 0,

        'import/named'   : 0,
        'import/default' : 0,

        'mocha/no-global-tests'    : 0,
        'mocha/no-top-level-hooks' : 0,

        'unicorn/filename-case' : [ 'error', {
            'cases' : {
                'kebabCase'  : true,
                'pascalCase' : true
            }
        } ],

        'sonarjs/no-duplicate-string' : 0
    }
};
