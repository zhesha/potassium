import React, { useState } from 'react';
import './App.scss';
import { Inventory } from './components/Inventory/Inventory';
import { Skill } from './components/Skill/Skill';
import { Character } from './components/Character/Character';
import { Pocket } from './components/Pocket/Pocket';
import { Game } from './components/Game/Game';

export enum Pages {
    game,
    inventory,
    skill,
    character,
    pocket,
}

function App() {
    const [page, setPage] = useState(Pages.game);

    return (
        <div className="App">
            <div className="game-box">
                {page === Pages.game &&
                    <Game setPage={setPage} />
                }
                {page === Pages.inventory &&
                    <Inventory />
                }
                {page === Pages.skill &&
                    <Skill />
                }
                {page === Pages.character &&
                    <Character />
                }
                {page === Pages.pocket &&
                    <Pocket />
                }
            </div>
        </div>
    );
}

export default App;
