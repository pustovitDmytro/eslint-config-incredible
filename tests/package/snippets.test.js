import path from 'path';
import { assert } from 'chai';
import { ESLint } from 'eslint';
import * as entry from '../entry';
import { testsRootFolder } from '../Test';

const examplesDir = path.join(testsRootFolder, 'examples');

const SNIPPETS = [
    // eslint-disable-next-line import/no-commonjs,security/detect-non-literal-require
    require(path.join(examplesDir, 'base'))
];

let eslint;

suite('Snippets #no-pack');

before(function () {
    eslint = new ESLint({
        cwd         : examplesDir,
        baseConfig  : entry,
        useEslintrc : false
    });
});

/* eslint-disable no-loop-func */
for (const { name, invalid } of SNIPPETS) {
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
}
