
const plugins = [ 'regexp' ];
const recommended = [ 'plugin:regexp/recommended' ];

const rules = {
    'regexp/optimal-lookaround-quantifier'         : 2,
    'regexp/prefer-escape-replacement-dollar-char' : 2,
    'regexp/prefer-regexp-exec'                    : 2,
    'regexp/confusing-quantifier'                  : 2,
    'regexp/no-dupe-disjunctions'                  : 2,
    'regexp/no-empty-alternative'                  : 2,
    'regexp/no-lazy-ends'                          : 2,
    'regexp/no-legacy-features'                    : 2,
    'regexp/no-non-standard-flag'                  : 2,
    'regexp/no-obscure-range'                      : 2,
    'regexp/no-optional-assertion'                 : 2,
    'regexp/no-potentially-useless-backreference'  : 2,
    'regexp/no-useless-escape'                     : 2,
    'regexp/no-standalone-backslash'               : 2,
    'regexp/no-unused-capturing-group'             : 2,
    'regexp/no-useless-assertions'                 : 2,
    'regexp/no-useless-dollar-replacements'        : 2,
    'regexp/no-zero-quantifier'                    : 2,

    'regexp/strict' : 0 // conflicts with unicorn/better-regex which looks cleaner
};

export {
    plugins,
    recommended as extends,
    rules
};
