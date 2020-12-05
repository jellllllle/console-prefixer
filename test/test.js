const consolePrefixer = require('../bin/console-prefixer');

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