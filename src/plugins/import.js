/* eslint-disable no-magic-numbers */
module.exports = {
    'plugins' : [ 'import' ],
    'extends' : [
        'plugin:import/recommended'
    ],
    'rules' : {
        'import/no-commonjs' : 0,

        'import/imports-first'        : 2,
        'import/order'                : [ 2, { 'groups': [ 'builtin', 'external', 'internal',  'parent', 'sibling', 'index' ] } ],
        'import/newline-after-import' : 2
    }
};
