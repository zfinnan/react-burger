import React, { useState } from 'react';


function ClearButton(props) {
    return(
        <div>
            <button onClick={props.clear}>New Burger</button>
        </div>
    )
}

export default ClearButton