import { NumbersEntityBase } from '../NumbersEntityBase';
import type { NumbersSDK } from '../NumbersSDK';
import type { Control } from '../types';
import type { Random, RandomLoadMatch } from '../NumbersTypes';
declare class RandomEntity extends NumbersEntityBase<Random> {
    constructor(client: NumbersSDK, entopts: any);
    make(this: RandomEntity): RandomEntity;
    load(this: any, reqmatch?: RandomLoadMatch, ctrl?: Control): Promise<RandomEntity>;
}
export { RandomEntity };
