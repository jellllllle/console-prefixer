# console-prefixer
Easily add styled prefixes to your logs with the lightweight console wrapper for Browser or Node which also preserves correct line numbers. 

![alt text](https://i.ibb.co/T1fy5X3/download.png)

## Features
* Adjust log levels (For example to disable logs on production)
* Set your own styled prefix per method.
* Preserves correct line number in console (This I really missed in most other loggers)
* Create multiple loggers with different settings 
* Types included

## Installation
```
npm i console-prefixer --save
```

## Usuage
```javascript
import consolePrefixer from 'console-prefixer' //or const consolePrefixer = require('console-prefixer')
const logger = consolePrefixer({
    defaultPrefix:{
        text:'my package \u2714',
        style:'background: green; color: white;font-weight:bold; padding:2px; border-radius:2px;'
    },
});

logger.log('Hey there!')
```

Will output (Chrome):
![alt text](https://i.ibb.co/LN8FxhW/Screenshot-7.png)

#### Methods
 * debug
 * log
 * dir
 * group
 * groupCollapsed
 * trace
 * info
 * warn
 * error
 
All methods work exactly the same as it would with the console.
Other methods from console, just use console.
   
#### logLevel

```javascript
import consolePrefixer from 'console-prefixer'
const logger = consolePrefixer({
    defaultPrefix:{
        text:'my package \u2714',
        style:'background: green; color: white;font-weight:bold; padding:2px; border-radius:2px;'
    },
    logLevel: 1,
});
   
logger.log('Hey there!')
```
Ajust log level. Everything lower will not being shown:
 * 0 debug (default)
 * 1 log, dir, log, group, groupCollapsed, trace
 * 2 info
 * 3 warn
 * 4 error
 * 5 disable all
 
 #### Method specific prefix
 You can also add method specific prefixes as follows:
 ```javascript
import consolePrefixer from 'console-prefixer'
const logger = consolePrefixer({
    defaultPrefix:
        {
            text:'my package \u2714',
            style:'background: green; color: white;font-weight:bold; padding:2px; border-radius:2px;'
        },
    prefixes: {
        log: {
            text: 'my package \u2714',
            style: 'background: green; color: white;font-weight:bold; padding:2px; border-radius:2px;'
        },
        info: {
            text: '\u2757'
        }
    }
});
   
logger.debug('debugging!') //no prefix
logger.log('logging list!', ['apple', 'pineapple'])
logger.info('Here some info')
```

Will output (Chrome):
![alt text](https://i.ibb.co/wQJbGjW/Screenshot-6.png)

If a method doesnt have a specific prefix, defaultPrefix will be used. If there is also no defaultPrefix, no prefix will be used for this method.
 
#### Make global
If you desire to make it global you can add it inside a module or add it to the window

##### Using module (recommended)
```javascript
export const logger = consolePrefixer(my_options)
```

##### Using window (browser only)

```javascript
if(!window.logger){
    window.logger = consolePrefixer(my_options);
}
```
You might need the following type declaration if you are using Typescript
```javascript
export declare global {
  interface Window {
    logger:any
  }
}
```

#### Multiple loggers
You can create logger anywhere.
This can become in handy when you want to enable or disabled logs for a particular class or module.
Or when you want different prefixes for different parts of the codebase.

#### Why my style is not working?
Not all browser or terminals support css styled logs. You might need use another browser or download a plugin in case of Node. 



