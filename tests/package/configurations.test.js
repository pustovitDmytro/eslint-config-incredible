import { assert } from 'chai';
import * as entry from '../entry';

suite('Configurations');

test('Default configuration', function () {
    assert.exists(entry);
    assert.isNotEmpty(entry);
});
