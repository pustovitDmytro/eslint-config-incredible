import babel from './parsers/babel';
import node from './env/node';
import baseRules from './rules/base';
import overrideBin from './overrides/bin';
import overrideTests from './overrides/tests';
import overrideEntry from './overrides/entry';

const pluginConfigs = [
    './plugins/import',
    './plugins/censor',
    './plugins/security'
].map(require.resolve);

module.exports = {
    parser        : babel.parser,
    parserOptions : {
        ...babel.parserOptions
    },
    env     : node,
    extends : pluginConfigs,
    rules   : {
        ...baseRules
    },
    overrides : [ overrideBin, overrideTests, overrideEntry ]
};
