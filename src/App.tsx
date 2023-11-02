import React from 'react';
import './App.scss';
import { Field } from './Field/Field';
import { Controls } from './Controls/Controls';
import { Info } from './Info/Info';

function App() {
    return (
        <div className="App">
            <div className="game-box">
                <Field />
                <Controls/>
                <Info/>
            </div>
        </div>
    );
}

export default App;
