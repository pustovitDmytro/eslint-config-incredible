export default {
    'files'         : [ 'bin/**', 'cli/**' ],
    'excludedFiles' : [ '*.test.js', 'tests/**' ],
    'rules'         : {
        'import/no-commonjs' : [ 2, {
            'allowPrimitiveModules'   : true,
            'allowConditionalRequire' : true
        } ],

        'unicorn/no-process-exit' : 0,
        'unicorn/filename-case'   : [
            'error',
            {
                'cases' : {
                    'kebabCase' : true
                }
            }
        ],

        'no-process-exit' : 0,

        'node/no-process-exit' : 0,
        'node/shebang'         : 0
    }
};
