import { Button } from '@mui/material';
import React, { useState } from 'react';

function CheckEx(props) {
  const[isPinned, setPinned] = useState(false)
  const togglePinned = () => {
        setPinned(!isPinned)
  }
  return (
       <div>
            <Button variant="outlined"
              onClick={togglePinned}
          > Pinn This!  {isPinned && 'v231231321'}</Button>
       </div>
    );
}

export default CheckEx;