import { assert } from 'chai';
import entry, { _load } from '../entry';

const PLUGINS = [ 'import' ];

PLUGINS.forEach(name => {
    suite.only(`Plugins: ${name}`);

    test('Present in default incredible configuration', function () {
        const extendedPath = entry.extends.find(p => p.includes(name));

        assert.exists(extendedPath);
        assert.equal(extendedPath, _load.resolve(`plugins/${name}.js`));
    });

    test('Load actual plugin', function () {
        const plugin = _load(`plugins/${name}.js`);

        assert.exists(plugin);
        assert.deepEqual(plugin.plugins, [ name ]);
    });

    test('Extends recommended configuration', function () {
        const plugin = _load(`plugins/${name}.js`);

        assert.exists(plugin);
        assert.includeMembers(plugin.extends, [ `plugin:${name}/recommended` ]);
    });
});
