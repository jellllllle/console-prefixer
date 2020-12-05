#console-prefixer
Lightweight console wrapper for Browser or Node which also preserves line numbers. 

## features
* Easily adjust log levels (For example to disable logs on production)
* Set your own colored prefix per method.
* Preserves line number in console (This I missed in most other loggers)
* Create multiple loggers with different settings 
* Types included

![alt text](https://i.ibb.co/T1fy5X3/download.png)

## Installation
```
$ npm install consolejs --save
```

## Usuage
```javascript
import consolePrefixer from 'console-prefixer' //or const consolejs = require('consolejs')
const logger = consolePrefixer({
    defaultPrefix:{
        text:'my package \u2714',
        style:'background: green; color: white;font-weight:bold; padding:2px; border-radius:2px;'
    },
});
   
logger.log('Hey there!')
```

#### methods
 * debug
 * log
 * dir
 * group
 * groupCollapsed
 * trace
 * info
 * warn
 * error
 
All methods work exactly the same as it would with the console
Note: console-prefixer is not a replacement for console. All other missing methods you know from console, just use console
   
#### logLevel

```javascript
import consolePrefixer from 'console-prefixer'
const logger = consolejs({
    defaultPrefix:{
        text:'my package \u2714',
        style:'background: green; color: white;font-weight:bold; padding:2px; border-radius:2px;'
    },
    logLevel: 1,
});
   
logger.log('Hey there!')
```
Ajust log level. Everything lower will not being shown 
 * 0 debug (default)
 * 1 log, dir, log, group, groupCollapsed, trace
 * 2 info
 * 3 warn
 * 4 error
 * 5 disable all
 
 #### method specific prefix
 You can add colored prefixes per method as follows:
 ```javascript
import consolePrefixer from 'console-prefixer'
const logger = consolejs({
    defaultPrefix:
        {
            text:'my package \u2714',
            style:'background: green; color: white;font-weight:bold; padding:2px; border-radius:2px;'
        },
    prefixes: {
        info: {
            text:'\u2757'
        },
    }
});
   
logger.log('Hey there!')
```
If a method doesnt have a specific prefix, default will be used
 
#### make global
If you desire to make it global can add it inside a module or add it to the window

##### using module (recommended)
```javascript
export const logger = consolejs(my_options)
```

##### using window

```javascript
if(!window.logger){
    window.logger = consolejs(my_options);
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

#### multiple loggers
You can create logger anywhere. You could have a separate logger for a class. 
This can become handy when you want to enable or disabled logs when you are working in the particular class
Or when you want different labels for different parts of the codebase



