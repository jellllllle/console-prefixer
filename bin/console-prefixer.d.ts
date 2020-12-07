interface IPrefix {
    text: string;
    style?: string;
}
interface IOptions {
    defaultPrefix?: IPrefix;
    prefixes?: {
        [method: string]: IPrefix;
    };
    logLevel?: 0 | 1 | 2 | 3 | 4 | 5;
}
declare interface ConsolePrefixerLogger {
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
}
export declare function consolePrefixer(options: IOptions): ConsolePrefixerLogger;
export {};
