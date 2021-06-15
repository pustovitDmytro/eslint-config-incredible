import babel from './parsers/babel';
import node from './env/node';
import baseRules from './rules/base';
import overrides from './overrides';
import plugins from './plugins';

const parser = babel.parser;
const parserOptions = babel.parserOptions;
const env = node;
const rules  = baseRules;

export {
    parser,
    parserOptions,
    env,
    plugins as extends,
    rules,
    overrides
};
