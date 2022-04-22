const {consolePrefixer} = require('../dist/console-prefixer');

const logger = consolePrefixer({
    defaultPrefix: {
        text: '[test]',
        style: 'background: red;',
    },
    logLevel: 0,
    prefixes: {
        log: {
            style: '[log]'
        }
    }
});

logger.log('log');
logger.debug('debug');
logger.dir('dir');
logger.error('error');
logger.group('group');
logger.groupCollapsed('groupCollapsed');
logger.groupEnd();
logger.trace('trace');
logger.warn('warn');

logger.setOptions({
    logLevel: 1,
    defaultPrefix: {
        text: '[test 2]',
        style: 'background: red;',
    },
});

if (logger.getOptions().logLevel !== 1) {
    throw new Error('Options not changed!');
}
logger.debug('debug 2');