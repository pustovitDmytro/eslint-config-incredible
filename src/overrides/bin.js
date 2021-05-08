/* eslint-disable no-magic-numbers */

module.exports = {
    'files'         : [ 'bin/**', 'cli/**' ],
    'excludedFiles' : [ '*.test.js', 'tests/**' ],
    'rules'         : {
        'import/no-commonjs' : [ 2, {
            'allowPrimitiveModules'   : true,
            'allowConditionalRequire' : true
        } ]
    }
};
