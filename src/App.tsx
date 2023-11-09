import React, { useState } from 'react';
import './App.scss';
import { Field } from './Field/Field';
import { Controls } from './Controls/Controls';
import { Info } from './Info/Info';
import { Modal } from './Modal/Modal';
import { game } from './Game/Game';

function App() {
    const [lootMessage, setLootMessage] = useState<string | null>(null);

    game.onShowLoot(function (message: string) {
        setLootMessage(message);
    });

    return (
        <div className="App">
            <div className="game-box">
                <Field />
                <Controls/>
                <Info/>
                {lootMessage && <Modal close={() => setLootMessage(null)} message={lootMessage}/>}
            </div>
        </div>
    );
}

export default App;
