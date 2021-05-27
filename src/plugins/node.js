const plugins = [ 'node' ];
const recommended = [ 'plugin:node/recommended' ];
const rules = {
    'node/no-unsupported-features/es-syntax' : [ 'error', {
        'ignores' : [ 'modules' ]
    } ],
    'node/no-extraneous-import' : 0, // duplicates import/no-extraneous-dependencies,
    'node/no-process-exit'      : 0, // duplicates base no-process-exit
    'node/no-missing-import'    : 0  // duplicates import/no-unresolved
};

export {
    plugins,
    recommended as extends,
    rules
};
