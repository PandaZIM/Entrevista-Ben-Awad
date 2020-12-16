import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Contador from './Contador'
import FetchData from './FetchData';

function Routes() {
  return(
      <BrowserRouter>
        <Route path ='/' exact component={Contador}/>
        <Route path ='/fetchdata' component={FetchData}/>
      </BrowserRouter>
  )
}

export default Routes;