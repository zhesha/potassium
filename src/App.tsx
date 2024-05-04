import React, { useState } from 'react';
import './App.scss';
import { InventoryPage } from './components/InventoryPage/InventoryPage';
import { SkillPage } from './components/SkillPage/SkillPage';
import { CharacterPage } from './components/CharacterPage/CharacterPage';
import { GamePage } from './components/GamePage/GamePage';
import { NpcPage } from './components/NpcPage/NpcPage';
import { game } from './Game/Game';

export enum Pages {
    game,
    inventory,
    skill,
    character,
    npc
}

function App() {
    const [page, setPage] = useState(Pages.game);

    game.onReachNpc(() => {
        setPage(Pages.npc);
    });

    return (
        <div className="App">
            <div className="game-box">
                {page === Pages.game &&
                    <GamePage setPage={setPage} />
                }
                {page === Pages.inventory &&
                    <InventoryPage setPage={setPage} />
                }
                {page === Pages.skill &&
                    <SkillPage setPage={setPage} />
                }
                {page === Pages.character &&
                    <CharacterPage setPage={setPage} />
                }
                {page === Pages.npc &&
                    <NpcPage setPage={setPage} />
                }
            </div>
        </div>
    );
}

export default App;
