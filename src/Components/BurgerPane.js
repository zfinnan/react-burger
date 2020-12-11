import React, { useState } from 'react';
import ClearButton from './ClearButton';
import StackingArea from './StackingArea'

function BurgerPane(props) {
    return(
        <div className="pane">
            <StackingArea layers={props.layers}/>
            <ClearButton clear={props.clear}/>
        </div>
    )
}

export default BurgerPane