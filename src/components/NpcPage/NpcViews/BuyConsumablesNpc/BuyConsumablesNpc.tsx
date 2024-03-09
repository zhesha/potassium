import { game } from "../../../../Game/Game";
import { PocketItemType } from "../../../../Game/Inventory";
import { LootItem, getRealItemFromLoot } from "../../../../Game/Loot";
import { PocketLoot } from "../../../../Game/Pocket";
import { lootMap } from "../../../../Game/lootMap";

import './BuyConsumablesNpc.scss'

// 1л ХП - 
// 3л ХП - 
// 5л ХП - 
// 1л МП - 
// 3л МП - 
// 1л баф шкода - 
// 1л шкода вогнем, холодом, водою - 
// 1л баф вогнем, холодом, водою - 
const itemsToBuy: Array<PocketLoot> = [
    {
        name: 'health potion 20',
        hp: 20,
        price: 20,
        type: PocketItemType.healthPotion,
    },
];

export function BuyConsumablesNpc () {
    return <div>
        <div>Buy Consumables</div>
        <div>
            <BuyItem item={itemsToBuy[0]}/>
        </div>
    </div>;
}

interface BuyItemProps {
    item: LootItem
}

function BuyItem ({item}: BuyItemProps) {
    item = item as PocketLoot;
    const realPrice = item.price * 3;
    function buy () {
        const realItem = getRealItemFromLoot(item);
        if (realItem && game.player.money >= realPrice) {
            game.player.money -= realPrice;
            game.player.inventory.backpack.add(realItem);
        }
    }
    return <div className="buy-item" onClick={buy}>{item.name}: {realPrice}</div>;
}