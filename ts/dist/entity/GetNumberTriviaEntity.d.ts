import { NumbersEntityBase } from '../NumbersEntityBase';
import type { NumbersSDK } from '../NumbersSDK';
import type { Control } from '../types';
import type { GetNumberTrivia, GetNumberTriviaLoadMatch } from '../NumbersTypes';
declare class GetNumberTriviaEntity extends NumbersEntityBase<GetNumberTrivia> {
    constructor(client: NumbersSDK, entopts: any);
    make(this: GetNumberTriviaEntity): GetNumberTriviaEntity;
    load(this: any, reqmatch?: GetNumberTriviaLoadMatch, ctrl?: Control): Promise<GetNumberTriviaEntity>;
}
export { GetNumberTriviaEntity };
