import React, { useState } from 'react';
import './App.scss';
import { Field } from './components/Field/Field';
import { Controls } from './components/Controls/Controls';
import { Info } from './components/Info/Info';
import { Modal } from './components/Modal/Modal';
import { game } from './Game/Game';
import { Inventory } from './components/Inventory/Inventory';

enum Pages {
    game,
    inventory,
}

function App() {
    const [lootMessage, setLootMessage] = useState<string | null>(null);
    const [page, setPage] = useState(Pages.game);

    game.onShowLoot(function (message: string) {
        setLootMessage(message);
    });

    return (
        <div className="App">
            <div className="game-box">
                {page === Pages.game &&
                    <>
                        <Field />
                        <Controls toInventory={() => setPage(Pages.inventory)}/>
                        <Info/>
                    </>
                }
                {page === Pages.inventory &&
                    <Inventory />
                }
                {lootMessage && <Modal close={() => setLootMessage(null)} message={lootMessage}/>}
            </div>
        </div>
    );
}

export default App;
