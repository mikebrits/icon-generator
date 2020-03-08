import React from 'react';
import { ViewAllIcons } from './ViewIcons';
import {SVGIcon} from './SvgIcon';
import Slippers from './icons/Slippers';

function App() {
    return (
        <div className="App">
            <SVGIcon icon={Slippers} size="s" />
            <ViewAllIcons />
        </div>
    );
}

export default App;
