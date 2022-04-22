interface IPrefix {
    text: string
    style?: string
}

interface IOptions {
    defaultPrefix?: IPrefix
    prefixes?: { [method: string]: IPrefix }
    logLevel?: 0 | 1 | 2 | 3 | 4 | 5
}

export declare interface ConsolePrefixerLogger {
    debug(message?: any, ...optionalParams: any[]): void;

    dir(value?: any, ...optionalParams: any[]): void;

    error(message?: any, ...optionalParams: any[]): void;

    group(groupTitle?: string, ...optionalParams: any[]): void;

    groupCollapsed(groupTitle?: string, ...optionalParams: any[]): void;

    groupEnd(): void;

    info(message?: any, ...optionalParams: any[]): void;

    log(message?: any, ...optionalParams: any[]): void;

    trace(message?: any, ...optionalParams: any[]): void;

    warn(message?: any, ...optionalParams: any[]): void;

    setOptions(options: IOptions): IOptions

    getOptions(): IOptions
}

export function consolePrefixer(options: IOptions): ConsolePrefixerLogger {
    if (!options) options = {}
    const prefixes = options.prefixes || {}
    const debug = {};
    //!!!!make sure added names are (message?: any, ...optionalParams: any[]) functions!!!!
    function bind() {
        [['debug'], ['dir', 'log', 'group', 'groupCollapsed', 'trace'], ['info'], ['warn'], ['error']].forEach((attrs, index) => {
            for (let attr of attrs) {
                const prefix = prefixes[attr] || options.defaultPrefix
                if (!options.logLevel || index >= options.logLevel) {
                    if (prefix) {
                        const text = prefix.text || ''
                        const style = text && prefix.style ? prefix.style : ''
                        debug[attr] = console[attr].bind(console, '%c' + text, style);
                    } else {
                        debug[attr] = console[attr].bind(console);
                    }
                } else {
                    debug[attr] = function () {
                    };
                }
            }
        });
    }
    bind();
    debug['groupEnd'] = console.groupEnd;
    debug['setOptions'] = (newOptions: IOptions) => {
        for (let key in newOptions) {
            options[key] = newOptions[key];
        }
        bind();
        return options;
    }
    debug['getOptions'] = () => options;

    return debug as ConsolePrefixerLogger
}