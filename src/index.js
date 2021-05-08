import babel from './parsers/babel';

module.exports = {
    parser        : babel.parser,
    parserOptions : {
        ...babel.parserOptions
    },
    env     : require('./env/node'),
    extends : [
        './plugins/import',
        './plugins/censor',
        './plugins/security'
    ].map(require.resolve),
    rules : {
        ...require('./rules/base')
    },
    overrides : [
        require('./overrides/bin'),
        require('./overrides/tests'),
        require('./overrides/entry')
    ]
};
