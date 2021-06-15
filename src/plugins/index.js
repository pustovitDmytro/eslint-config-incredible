const plugins =  [
    './censor',
    './import',
    './markdown',
    './no-secrets',
    './node',
    './promise',
    './regexp',
    './scanjs-rules',
    './security',
    './sonarjs',
    './unicorn'
].map(p => require.resolve(p));

export default plugins;
