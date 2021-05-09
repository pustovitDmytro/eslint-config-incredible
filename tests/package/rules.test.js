import { assert } from 'chai';
import entry from '../entry';
import { load } from '../Test';

const SETS = [ 'base' ];

SETS.forEach(name => {
    suite(`Rule set: ${name}`);

    const set = load(`rules/${name}.js`).default;

    test('Exports rules as dictionary', function () {
        assert.exists(set);
        assert.isObject(set);
        assert.isNotEmpty(set);
    });

    test('Present in default incredible configuration', function () {
        assert.deepOwnInclude(entry.rules, set);
    });
});
