export default {
    'plugins' : [ 'security' ],
    'extends' : [
        'plugin:security/recommended'
    ],
    'rules' : {
        'security/detect-non-literal-fs-filename' : 0,
        'security/detect-object-injection'        : 0
    }
};
