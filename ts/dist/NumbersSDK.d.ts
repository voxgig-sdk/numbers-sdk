import { GetNumberFactEntity } from './entity/GetNumberFactEntity';
import { GetNumberTriviaEntity } from './entity/GetNumberTriviaEntity';
import { RandomEntity } from './entity/RandomEntity';
export type * from './NumbersTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { NumbersEntityBase } from './NumbersEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class NumbersSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    GetNumberFact(entopts?: Record<string, any>): GetNumberFactEntity;
    GetNumberTrivia(entopts?: Record<string, any>): GetNumberTriviaEntity;
    Random(entopts?: Record<string, any>): RandomEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): NumbersSDK;
    tester(testopts?: any, sdkopts?: any): NumbersSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof NumbersSDK;
export { stdutil, config, BaseFeature, NumbersEntityBase, NumbersSDK, SDK, };
