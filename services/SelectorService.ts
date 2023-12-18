
import { MagicNums, Rental, MoreData,} from '@/selectors';


export interface SelectorService {
  //  getSelector(type: string): any;
    data: {
        rental: Rental,
        moredata: MoreData,
        magicNum: MagicNums
    }
}
 

export const SelectorService: SelectorService = {
    data: {
        rental:Rental,
        moredata: MoreData,
        magicNum: MagicNums
       
    }
}
