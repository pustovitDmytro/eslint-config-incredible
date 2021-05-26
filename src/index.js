import babel from './parsers/babel';
import node from './env/node';
import baseRules from './rules/base';
import overrides from './overrides';

const pluginConfigs =  [
    './plugins/censor',
    './plugins/import',
    './plugins/markdown',
    './plugins/no-secrets',
    './plugins/node',
    './plugins/promise',
    './plugins/regexp',
    './plugins/scanjs-rules',
    './plugins/security',
    './plugins/sonarjs',
    './plugins/unicorn'
].map(p => require.resolve(p));


const parser = babel.parser;
const parserOptions = babel.parserOptions;
const env = node;
const rules  = baseRules;

export {
    parser,
    parserOptions,
    env,
    pluginConfigs as extends,
    rules,
    overrides
};
