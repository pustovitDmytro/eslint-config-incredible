import { assert } from 'chai';
import * as entry from '../entry';
import { load, resolve } from '../Test';

const PLUGINS = [ 'censor', 'import', 'security', 'markdown', 'mocha', 'no-secrets', 'node', 'promise', 'regexp', 'scanjs-rules', 'security', 'sonarjs', 'unicorn' ];

const NO_RECOMMENDED = new Set([ 'mocha', 'no-secrets', 'scanjs-rules' ]);

for (const name of PLUGINS) {
    suite(`Plugins: ${name}`);

    test('Present in default incredible configuration', function () {
        const extendedPath = entry.extends.find(p => p.includes(`${name}.js`));

        assert.exists(extendedPath);
        assert.equal(extendedPath, resolve(`plugins/${name}`));
    });

    test('Load actual plugin', function () {
        const plugin = load(`plugins/${name}`);

        assert.exists(plugin);
        assert.deepEqual(plugin.plugins, [ name ]);
    });

    test('Extends recommended configuration', function () {
        if (NO_RECOMMENDED.has(name)) this.skip();
        const plugin = load(`plugins/${name}`);

        assert.exists(plugin);
        assert.includeMembers(plugin.extends, [ `plugin:${name}/recommended` ]);
    });
}
