import React, { useState } from 'react';
import './App.scss';
import { InventoryPage } from './components/InventoryPage/InventoryPage';
import { SkillPage } from './components/SkillPage/SkillPage';
import { CharacterPage } from './components/CharacterPage/CharacterPage';
import { PocketPage } from './components/PocketPage/PocketPage';
import { GamePage } from './components/GamePage/GamePage';

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
                    <GamePage setPage={setPage} />
                }
                {page === Pages.inventory &&
                    <InventoryPage />
                }
                {page === Pages.skill &&
                    <SkillPage />
                }
                {page === Pages.character &&
                    <CharacterPage />
                }
                {page === Pages.pocket &&
                    <PocketPage />
                }
            </div>
        </div>
    );
}

export default App;
