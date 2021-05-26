const plugins = [ 'node' ];
const recommended = [ 'plugin:node/recommended' ];
const rules = {
    'node/no-unsupported-features/es-syntax' : [ 'error', {
        'ignores' : [ 'modules' ]
    } ],
    'node/no-extraneous-import' : 0 // duplicates import/no-extraneous-dependencies
};

export {
    plugins,
    recommended as extends,
    rules
};
