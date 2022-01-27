export default {
    'parser'        : '@babel/eslint-parser',
    'parserOptions' : {
        'sourceType'                  : 'module',
        'allowImportExportEverywhere' : false,
        'requireConfigFile'           : false,
        'ecmaFeatures'                : {
            'arrowFunctions'                   : true,
            'blockBindings'                    : true,
            'classes'                          : true,
            'defaultParams'                    : true,
            'destructuring'                    : true,
            'forOf'                            : true,
            'generators'                       : false,
            'modules'                          : true,
            'objectLiteralComputedProperties'  : true,
            'objectLiteralDuplicateProperties' : false,
            'objectLiteralShorthandMethods'    : true,
            'objectLiteralShorthandProperties' : true,
            'restParams'                       : true,
            'spread'                           : true,
            'superInFunctions'                 : true,
            'templateStrings'                  : true,
            'jsx'                              : true
        }
    }
};
