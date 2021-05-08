import { assert } from 'chai';
import entry, { _load } from '../entry';

const SETS = [ 'base' ];

SETS.forEach(name => {
    suite(`Rule set: ${name}`);

    const set = _load(`rules/${name}.js`);

    test('Exports rules as dictionary', function () {
        assert.exists(set);
        assert.isObject(set);
        assert.isNotEmpty(set);
    });

    test('Present in default incredible configuration', function () {
        assert.deepOwnInclude(entry.rules, set);
    });
});
