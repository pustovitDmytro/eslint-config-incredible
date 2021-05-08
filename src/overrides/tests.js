import testEnv from '../env/tests';

export default {
    'files' : [ '*.test.js', 'tests/**' ],
    'env'   : testEnv,
    'rules' : {
        'prefer-arrow-callback'              : 0,
        'no-magic-numbers'                   : 0,
        'security/detect-non-literal-regexp' : 0,
        'import/named'                       : 0,
        'import/default'                     : 0
    }
};
