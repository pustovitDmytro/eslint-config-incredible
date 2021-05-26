import babel from './parsers/babel';
import node from './env/node';
import baseRules from './rules/base';
import overrides from './overrides';

const pluginConfigs =  [
    './plugins/censor.json',
    './plugins/import.json',
    './plugins/markdown.json',
    './plugins/mocha.json',
    './plugins/no-secrets.json',
    './plugins/node.json',
    './plugins/promise.json',
    './plugins/regexp.json',
    './plugins/scanjs-rules.json',
    './plugins/security.json',
    './plugins/sonarjs.json',
    './plugins/unicorn.json'
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
