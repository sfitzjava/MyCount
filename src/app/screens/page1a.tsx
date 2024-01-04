

import React = require('react');
import { SelectorService } from '../../../services/SelectorService';
import { usePresenter } from './p2Biza';
import {Page1} from './views/page1'

let myPage = "";
let isVisible: boolean = true;

const data = SelectorService.data;


export default function Page1a() {

  return (
     <Page1 data={data} handlers={usePresenter({ initial: 7, final: 6 })} />
    )
}
