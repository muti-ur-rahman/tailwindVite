// App.jsx
import React, { useState } from 'react';
import ClrApp from "./clrchange01"
import Colorchange from "./colorchange02"; 



function App ( ){


  return (
    <div className='h-screen'>
    <div className={'h-[50%]'}>
    <ClrApp/> 
    </div>

    <div className={'h-[50%] ' }>
    {/* <Colorchange/> */}
    </div>

    </div>
  );
};

export default App;
