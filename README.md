# console-prefixer
Easily add styled prefixes to your logs with the lightweight (<1KB) console wrapper for ES5 supported Browsers or Node which also preserves the correct line numbers. 

![alt text](https://i.ibb.co/T1fy5X3/download.png)

## Features
* Adjust log levels (For example to disable logs on production)
* Set your own styled prefix per method
* Preserves the correct line number in the debug console (This I really missed in most other loggers)
* Create multiple loggers with different settings (global or local)
* Types included

## Installation
```
npm i console-prefixer --save
```

## Usage
```javascript
import {consolePrefixer} from 'console-prefixer' //or const {consolePrefixer} = require('console-prefixer')
const logger = consolePrefixer({
    defaultPrefix:{
        text:'my package \u2714',
        style:'background: green; color: white;font-weight:bold; padding:2px; border-radius:2px;'
    },
});

logger.log('Hey there!');
```

Will output (Chrome):
![alt text](https://i.ibb.co/LN8FxhW/Screenshot-7.png)

### Log Methods
 * debug
 * log
 * dir
 * group
 * groupCollapsed
 * groupEnd
 * trace
 * info
 * warn
 * error
   
All methods work exactly the same as it would with the console.

### Other Methods
 * setOptions(options) -> new options
 * getOptions() -> options

To change the options you can either recall consolePrefixer or alter it with the setOptions method 

## Options
Options are set with consolePrefixer(options) or you can change it at anytime with setOptions

 * defaultPrefix
 * prefixes
 * logLevel

### defaultPrefix
All methods except 'groupEnd' will include the prefix.
 
### prefixes
 You can also add method specific prefixes as follows:
 ```javascript
import {consolePrefixer} from 'console-prefixer'

const logger = consolePrefixer({
    prefixes: {
        log: {
            text: 'CL',
            style: 'background: #3270A0; color: white;font-weight:bold; padding:2px; border-radius:20px; border: 1px solid white;'
        },
        info: {
            text: '\u2757'
        }
    }
});
   
logger.debug('debugging!'); //no prefix because no debug prefix or defaultPrefix is set
logger.log('logging list!', ['apple', 'pineapple']);
logger.info('Here some info');
```

Will output (Chrome):
![alt text](https://i.ibb.co/wQJbGjW/Screenshot-6.png)

If a method doesnt have a specific prefix, defaultPrefix will be used. If there is also no defaultPrefix, no prefix will be used for this method.
 
### logLevel
```javascript
import {consolePrefixer} from 'console-prefixer'
const logger = consolePrefixer({
    defaultPrefix:{
        text:'my package \u2714',
        style:'background: green; color: white;font-weight:bold; padding:2px; border-radius:2px;'
    },
    logLevel: 2,
});
   
//will not show
logger.log('Hey there!');

//Show all logs again, handy if you want to show or hide logs at runtime
logger.setOptions({
     logLevel: 0,
})

//will show again
logger.log('Where were you!');

```
Ajust log level. Everything lower will not being shown:
 * 0 debug (default)
 * 1 log, dir, log, group, groupCollapsed, trace
 * 2 info
 * 3 warn
 * 4 error
 * 5 disable all

## Usage inside your codebase

### Use a logger anywhere
You don't want to setup a logger every time so make it accessible 

#### Using window (browser only)

```javascript
window.logger = consolePrefixer(my_options);
```
```javascript
//any other file
logger.log('test')
```


#### Using module
```javascript
//debug.js
export const logger = consolePrefixer(my_options);
```
```javascript
//any other file
import {logger} from './debug'
logger.log('test')
```

### Multiple loggers
You can create loggers anywhere.
This can become in handy when you want to enable or disabled logs for a particular class or module.
Or when you want different prefixes for different parts of the codebase.

## Troubleshooting

### Styling not working?
Not all browser or terminals support css styled logs. You might need to use another browser or download a plugin in case of Node. 



