const plugins = [ 'unicorn' ];
const recommended = [ 'plugin:unicorn/recommended' ];
const rules = {
    'unicorn/no-unused-properties'     : 2,
    'unicorn/no-unsafe-regex'          : 2,
    'unicorn/prevent-abbreviations'    : 0,
    'unicorn/no-null'                  : 0,
    'unicorn/prefer-node-protocol'     : 0,
    'unicorn/consistent-destructuring' : 0,
    'unicorn/prefer-module'            : 0,
    'unicorn/no-process-exit'          : 0, // duplicates base no-process-exit
    'unicorn/no-array-for-each'        : 0, // not usefull in chaining, bug with retur-continue
    'unicorn/custom-error-definition'  : 0,


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
