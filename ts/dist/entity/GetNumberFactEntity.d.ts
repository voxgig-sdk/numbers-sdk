import { NumbersEntityBase } from '../NumbersEntityBase';
import type { NumbersSDK } from '../NumbersSDK';
import type { Control } from '../types';
import type { GetNumberFact, GetNumberFactLoadMatch } from '../NumbersTypes';
declare class GetNumberFactEntity extends NumbersEntityBase<GetNumberFact> {
    constructor(client: NumbersSDK, entopts: any);
    make(this: GetNumberFactEntity): GetNumberFactEntity;
    load(this: any, reqmatch?: GetNumberFactLoadMatch, ctrl?: Control): Promise<GetNumberFactEntity>;
}
export { GetNumberFactEntity };
