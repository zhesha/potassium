import { game } from "../../../../Game/Game";
import { getRealItemFromLoot } from "../../../../Game/Loot";
import { lootMap } from "../../../../Game/lootMap";

import './CraftPotionNpc.scss'

const items = [
    {
        name: 'health potion 50',
        ingredients: [
            'health potion 20',
            'health potion 20',
            'health potion 20',
        ],
    },
];

export function CraftPotionNpc () {
    return <div>
        <div>Craft Potion</div>
        <div>
            <CraftPotionItem item={items[0]}/>
        </div>
    </div>;
}

interface CraftItem {
    name: string,
    ingredients: Array<string>,
}

interface BuyItemProps {
    item: CraftItem
}

function CraftPotionItem ({item}: BuyItemProps) {
    function buy () {
        if (hasIngredients(item)) {
            const lootItem = getRealItemFromCraft(item);
            const realItem = getRealItemFromLoot(lootItem);
            if (realItem) {
                removeIngredients(item)
                game.player.inventory.backpack.add(realItem);
            }
        }
    }
    return <div className="craft-item" onClick={buy}>{item.name}: {item.ingredients.join(', ')}</div>;
}

function getRealItemFromCraft (item: CraftItem) {
    return lootMap[2][3];
}

function hasIngredients(item: CraftItem) {
    const ingredients = [...item.ingredients];
    game.player.inventory.backpack.list.forEach(item => {
        const index = ingredients.indexOf(item.name);
        if (index !== -1) {
            ingredients.splice(index, 1);
        }
    });
    if (ingredients.length === 0) {
        return true;
    }
    return false;
}

function removeIngredients(item: CraftItem) {
    item.ingredients.forEach(ingredient => {
        const element =  game.player.inventory.backpack.list.find(item => item.name === ingredient);
        if (element) {
            game.player.inventory.backpack.remove(element);
        }
    });
}
