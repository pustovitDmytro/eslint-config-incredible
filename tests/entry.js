/* eslint-disable security/detect-non-literal-require */
import { entry } from './constants';

const m = require(entry);

// export default m.default;

const  { parser, parserOptions, env, extends: ext, rules, overrides } = m;

export { parser, parserOptions, env, ext as extends, rules, overrides };
