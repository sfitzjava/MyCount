

import React = require('react');
import { usePresenter } from './usePresenter';
import {Page1aUI} from './views/page1aUI'

export default function Page1a() {
  const pageLogic = usePresenter({ initial: 7, final: 6 });
  console.log("pageLogic", pageLogic.data);
  return (
     <Page1aUI   handlers={ pageLogic} />
    )
}
