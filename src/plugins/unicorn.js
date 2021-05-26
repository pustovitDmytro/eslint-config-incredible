const plugins = [ 'unicorn' ];
const recommended = [ 'plugin:unicorn/recommended' ];
const rules = {
    'unicorn/custom-error-definition'  : 2,
    'unicorn/no-unused-properties'     : 2,
    'unicorn/no-unsafe-regex'          : 2,
    'unicorn/prevent-abbreviations'    : 0,
    'unicorn/no-null'                  : 0,
    'unicorn/prefer-node-protocol'     : 0,
    'unicorn/consistent-destructuring' : 0,
    'unicorn/prefer-module'            : 0,
    'unicorn/no-process-exit'          : 0, // duplicates base no-process-exit

    'unicorn/filename-case' : [
        'error',
        {
            'cases' : {
                'camelCase'  : true,
                'pascalCase' : true
            }
        }
    ]
};

export {
    plugins,
    recommended as extends,
    rules
};
