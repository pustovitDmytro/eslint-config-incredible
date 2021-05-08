/* eslint-disable import/no-commonjs */
import path from 'path';
import { assert } from 'chai';
import { ESLint } from 'eslint';
import entry from '../entry';

const examplesDir = path.join(__dirname, '../examples');
const eslint = new ESLint({
    cwd         : examplesDir,
    baseConfig  : entry,
    useEslintrc : false
});

const SNIPPETS = [
    require('../examples/base')
];

suite('Snippets');

SNIPPETS.forEach(({ name, invalid }) => {
    test(`Positive: [${name}] valid snippet`, async function () {
        const [ result ] = await eslint.lintFiles(path.join(name, 'valid.js'));

        assert.equal(result.filePath, path.join(examplesDir, name, 'valid.js'));
        assert.equal(result.errorCount, 0, JSON.stringify(result.messages));
    });

    test(`Negative: [${name}] invalid snippet`, async function () {
        const [ result ] = await eslint.lintFiles(path.join(name, 'invalid.js'));
        const brokenRules = [ ...new Set(result.messages.map(r => r.ruleId)) ];

        assert.equal(result.filePath, path.join(examplesDir, name, 'invalid.js'));
        assert.notEqual(result.errorCount, 0);
        assert.includeMembers(brokenRules, invalid);
    });
});
